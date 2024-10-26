import React from "react";

import Tarjeta from "../components/Tarjeta";
import "../../css/PageHome.css";
import archivos from "../../../assets/icons/archivos.png";
import diploma from "../../../assets/icons/diploma.png";
import equipo from "../../../assets/icons/equipo.png";
import estudiantes from "../../../assets/icons/estudiantes.png";
import examen from "../../../assets/icons/examen.png";
import prueba from "../../../assets/icons/prueba.png";
import Navbar from "../components/Navbar";
import "../../css/app.css";

export default function PageHome() {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <div className="bg-black bg-opacity-50">
                    <h1 className="px-6 py-12 text-4xl font-semibold leading-tight text-white sm:px-12 sm:py-32 sm:text-5xl md:w-1/2 md:text-6xl">
                        Sistema de Evaluación Basada en Proyectos
                    </h1>
                </div>

                <section
                    id="caracteristicas"
                    className="px-6 py-10 bg-slate-900 sm:px-12"
                >
                    <h1 className="mb-8 text-3xl font-semibold text-center text-slate-200 sm:text-4xl">
                        Características
                    </h1>

                    <div className="grid grid-cols-1 gap-5 mx-auto max-w-screen-2xl sm:grid-cols-2 lg:grid-cols-3">
                        <Tarjeta
                            titulo="Característica 1"
                            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus, quisquam nihil, nesciunt quas mollitia magni harum dolor eaque voluptate quae omnis temporibus."
                            icono={archivos}
                        />

                        <Tarjeta
                            titulo="Característica 2"
                            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus, quisquam nihil, nesciunt quas mollitia magni harum dolor eaque voluptate quae omnis temporibus."
                            icono={diploma}
                        />

                        <Tarjeta
                            titulo="Característica 3"
                            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus, quisquam nihil, nesciunt quas mollitia magni harum dolor eaque voluptate quae omnis temporibus."
                            icono={equipo}
                        />

                        <Tarjeta
                            titulo="Característica 4"
                            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus, quisquam nihil, nesciunt quas mollitia magni harum dolor eaque voluptate quae omnis temporibus."
                            icono={estudiantes}
                        />

                        <Tarjeta
                            titulo="Característica 5"
                            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus, quisquam nihil, nesciunt quas mollitia magni harum dolor eaque voluptate quae omnis temporibus."
                            icono={examen}
                        />

                        <Tarjeta
                            titulo="Característica 6"
                            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus, quisquam nihil, nesciunt quas mollitia magni harum dolor eaque voluptate quae omnis temporibus."
                            icono={prueba}
                        />
                    </div>
                </section>
            </main>
        </>
    );
}
