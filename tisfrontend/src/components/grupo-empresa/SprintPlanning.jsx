import React, { useEffect, useState } from 'react';
import './SprintPlanning.css';
import { TaskCard } from '../TaskCard';
import ButtonStory from "../../assets/empresa/button-story.svg";
import ModalTarea from '../ModalTarea';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SprintPlanning = () => {
    const { id } = useParams(); 
    const [showModal, setShowModal] = useState(false);
    const [selectedStory, setSelectedStory] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [userStories, setUserStories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSprintDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/sprints/${id}/details`);
                if (response.data.success) {
                    const sprintData = response.data.data;
                    setUserStories(sprintData.historias_usuario || []);
                    
                    const fetchedTasks = sprintData.historias_usuario.flatMap(story => 
                        story.tareas.map(task => ({
                            ...task,
                            historia_usuario: { titulo: story.titulo, prioridad: story.prioridad }
                        }))
                    );
                    setTasks(fetchedTasks);
                } else {
                    setError("Failed to fetch sprint details.");
                }
            } catch (err) {
                console.error("Error fetching sprint data:", err);
                setError("Error fetching sprint data.");
            }
        };

        fetchSprintDetails();
    }, [id]);

    const handleShowModal = (storyId) => {
        setSelectedStory(storyId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedStory(null);
    };

    const updateTaskStatus = async (taskId, newStatus) => {
        try {
            const token = localStorage.getItem('token');
            await axios.patch(`http://localhost:8000/api/v1/tareas/${taskId}/estado`, 
                { estado: newStatus }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log("Estado de la tarea actualizado en la base de datos");
        } catch (error) {
            console.error("Error al actualizar el estado de la tarea en la base de datos:", error);
        }
    };

    const handleStatusChange = (taskId, newStatus) => {
        const updatedTasks = tasks.map(task =>
            task.ID_tarea === taskId ? { ...task, estado: newStatus } : task
        );
        setTasks(updatedTasks);
        updateTaskStatus(taskId, newStatus);
    };

    const renderTasksByStatus = (status) => {
        if (!tasks || tasks.length === 0) {
            return <p>No tasks available</p>;
        }
    
        const tasksByStory = tasks.reduce((acc, task) => {
            const storyTitle = task.historia_usuario.titulo;
            if (!acc[storyTitle]) {
                acc[storyTitle] = [];
            }
            if (task.estado === status) {
                acc[storyTitle].push(task);
            }
            return acc;
        }, {});
    
        return Object.entries(tasksByStory).map(([storyTitle, tasks], index) => (
            <React.Fragment key={storyTitle}>
                <div className="story-section">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.ID_tarea}
                            task={{
                                title: task.contenido_tarea,
                                status: task.estado,
                                priority: task.historia_usuario.prioridad || 'medium',
                                assignee: task.estudiante ? task.estudiante.user.nombre : 'No asignado',
                                estimatedHours: task.estimacion,
                            }}
                            index={task.ID_tarea}
                            onDragStart={(e) => {
                                e.dataTransfer.setData('taskId', task.ID_tarea);
                            }}
                        />
                    ))}
                </div>
                {index < Object.entries(tasksByStory).length - 1 && <hr className="story-divider" />}
            </React.Fragment>
        ));
    };
    const renderUserStories = () => {
        return userStories.map((story, index) => (
            <React.Fragment key={story.ID_historia}>
                <div
                    className="user-story"
                    draggable
                    onDragStart={(e) => {
                        e.dataTransfer.setData('userStoryId', story.ID_historia);
                    }}
                >
                    <div>{story.titulo}</div>
                    <button className='button-story' onClick={() => handleShowModal(story.ID_historia)}>
                        <img src={ButtonStory} alt="Historia de usuario" />
                    </button>
                </div>
                {index < userStories.length - 1 && <hr className="story-divider" />}
            </React.Fragment>
        ));
    };

    const handleDrop = (e, newStatus) => {
        const taskId = parseInt(e.dataTransfer.getData('taskId'), 10);
        handleStatusChange(taskId, newStatus);
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="sprint-planning">
            <h2 className='titulos'>Planificación de Sprint</h2>
            <div className="task-table">
                <div className="column product-backlog">
                    <h3 className='titulo-task-user'>Historias de usuario</h3>
                    {renderUserStories()}
                </div>
                <div className="column" onDrop={(e) => handleDrop(e, "Tasks")} onDragOver={(e) => e.preventDefault()}>
                    <h3 className='titulo-task-user'>Tareas</h3>
                    {renderTasksByStatus("Tasks")}
                </div>
                <div className="column" onDrop={(e) => handleDrop(e, "In Process")} onDragOver={(e) => e.preventDefault()}>
                    <h3 className='titulo-task-user'>En proceso</h3>
                    {renderTasksByStatus("In Process")}
                </div>
                <div className="column" onDrop={(e) => handleDrop(e, "Done")} onDragOver={(e) => e.preventDefault()}>
                    <h3 className='titulo-task-user'>Completadas</h3>
                    {renderTasksByStatus("Done")}
                </div>
            </div>

            <ModalTarea 
                show={showModal} 
                onClose={handleCloseModal} 
                selectedStory={selectedStory} 
            />
        </div>
    );
};

export default SprintPlanning;
