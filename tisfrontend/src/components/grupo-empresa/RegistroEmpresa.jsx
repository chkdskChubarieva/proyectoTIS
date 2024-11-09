import { useEffect, useState } from 'react';
import axios from 'axios';
import './RegistroEmpresa.css';
import { useNavigate } from 'react-router-dom';
import { generateUniqueCode } from './generateUniqueCode';

const RegistroEmpresa = () => {
    const [nombre_empresa, setNombreEmpresa] = useState("amina");
    const [correo_empresa, setCorreoEmpresa] = useState("asd@dasd.com");
    const [nombre_representante, setNombreRepresentante] = useState("ads");
    const [telf_representante, setTelfRepresentante] = useState("2312");
    const [ID_docente, setIDDocente] = useState('1');
    const [codigo, setCodigo] = useState("");
    const [logo_empresa, setLogoEmpresa] = useState("asda");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [logoPreview, setLogoPreview] = useState(null);
    const [docentes, setDocentes] = useState([]);
    const [empresaData, setempresaData] = useState([]);
    const navigate = useNavigate();

    const fetchUniqueCode = async () => {
        const uniqueCode = await generateUniqueCode();
        setCodigo(uniqueCode);
    };

    useEffect(() => {
        fetchUniqueCode();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogoEmpresa(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/docentes')
            .then(response => {
                if (response.data.success) {
                    setDocentes(response.data.data);
                } else {
                    console.error("Failed to fetch docentes");
                }
            })
            .catch(error => {
                console.error("There was an error fetching the docentes!", error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post('http://localhost:8000/api/v1/grupo-empresa/register', {
                nombre_empresa,
                correo_empresa,
                nombre_representante,
                telf_representante,
                ID_docente,
                codigo,
                logo_empresa,
            });

            console.log("Respuesta completa del servidor:", response.data);

            if (response.data.success) {
                const empresaID = response.data.data.ID_empresa; 
                const userData = JSON.parse(sessionStorage.getItem('user'));
                const userID = userData ? userData.ID_usuario : null;

                if (userID) {
                    await axios.put(`http://localhost:8000/api/v1/estudiantes/${userID}/grupo-empresa`, {
                        ID_empresa: empresaID,
                    });
                }

                axios.get(`http://localhost:8000/api/v1/grupo-empresa/${empresaID}`)
                .then(responseEmpresa => {
                    console.log(responseEmpresa.data.data);
                    setempresaData(responseEmpresa.data.data);
                })
                .catch(error => {
                    console.error("Error fetching empresa data:", error);
                });

                setSuccess(true);
                
                navigate('/estudiante/registro-sprint');
                window.location.reload();
                
            } else {
                setError("Ocurrió un error en el registro.");
            }
        } catch (error) {
            console.error('Error registrando la empresa:', error);
            setError('Hubo un problema al registrar la empresa.');
        }
    };
    

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codigo)
            .then(() => {
                alert('Código copiado al portapapeles!'); 
            })
            .catch(err => {
                console.error('Error al copiar el código: ', err);
            });
    };
    return (
    <>
        <section className="form-container">
            <div className="registro-container">
                <h2>Registro de grupo-empresa</h2>
                <form onSubmit={handleSubmit}>
                    <section className='form-register-empresa'>
                        <section className='colum-register'>
                            <div className="form-group">
                                <label>Nombre de la empresa*</label>
                                <input
                                    type="text"
                                     value={nombre_empresa}
                                    onChange={(e) => setNombreEmpresa(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Correo electrónico de la empresa*</label>
                                <input
                                    type="email"
                                    value={correo_empresa}
                                    onChange={(e) => setCorreoEmpresa(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Número representante legal*</label>
                                <input
                                    type="text"
                                    value={telf_representante}
                                    onChange={(e) => setTelfRepresentante(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-code">
                                Código generado: 
                                <p>{codigo}

                                <button onClick={copyToClipboard} className="copy-button">
                                    <span role="img" aria-label="copiar">📋</span> 
                                </button>
                                </p>
                            </div>
                        </section>

                        <section className='colum-register'>
                            <div className="form-group">
                                <label>Nombre representante legal*</label>
                                <input
                                    type="text"
                                    value={nombre_representante}
                                    onChange={(e) => setNombreRepresentante(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group image-container">
                        <label>Docente TIS asignado</label>
                                <select
                                    value={ID_docente}
                                    onChange={(e) => setIDDocente(e.target.value)}
                                    required
                                    className="form-group image-container"
                                    >
                                    <option value="">Select a Docente</option>
                                    {docentes.map(docente => (
                                        <option key={docente.ID_docente} value={docente.ID_docente}>
                                            {docente.nombre_usuario}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group image-container">
                                <label>Logo de la empresa (subir imagen)</label>
                                <div>
                                    <img
                                        src={logoPreview}
                                        className="imagen-upload"
                                        />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className='upload'
                                        />
                                </div>
                            </div>
                        </section>
                    </section>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">Registro exitoso!</p>}
                    <button type="submit" className='button'>Registrar empresa</button>
                    {/* <button type="button" className='button' onClick={handleTestRegister}>Probar Registro</button> */}
                </form>
            </div>
        </section>
    </>
        
        
    );
};

export default RegistroEmpresa;
