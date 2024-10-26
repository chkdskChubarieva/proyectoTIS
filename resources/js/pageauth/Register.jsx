import React, { useState, useEffect } from "react";
import Config from '../Config';
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

const Register = () => {
    const {getToken} = AuthUser();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [correo, setCorreo] = useState("");
    const [cod_sis, setCodigo] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(getToken()){
          navigate("/")
        }
      },[])

    const submitRegistro = async(e) => {
        e.preventDefault();

        Config.getRegister({nombre, apellido, contrasenia, correo, cod_sis})
        .then(({data})=>{
            if(data.success){
                navigate("/login");
            }
        })
    }

    //Agregar codigo Javascript

    return (
        <>
            <header className="h-32">
                <div className="flex items-center justify-between h-20 px-4 fila-1">
                    <div className="px-3 py-1 bg-white rounded">
                        <img
                            className="w-8 sm:hidden"
                            src="../../../assets/img/logo_umss-simple.png"
                            alt=""
                        />
                        <img
                            className="hidden w-28 sm:block"
                            src="../../../assets/img/logo_umss.png"
                            alt="logo-umss"
                        />
                    </div>

                    <span className="text-xl font-bold text-slate-200 sm:text-2xl">
                        EBEP - UMSS
                    </span>

                    <div className="font-semibold rounded-md text-slate-200">
                        <a
                            href="./login.html"
                            id="registrarse"
                            className="p-2 transition-all bg-white rounded bg-opacity-5 hover:bg-opacity-10 hover:shadow"
                        >
                            Iniciar sesión
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center h-12 fila-2 bg-slate-200">
                    <ul className="flex items-center h-full gap-2 font-semibold text-md text-slate-500 sm:gap-4">
                        <li className="flex items-center h-full px-3 transition-colors hover:bg-slate-100">
                            <a href="./index.html">Inicio</a>
                        </li>
                    </ul>
                </div>
            </header>

            <main className="py-12 sm:pb-0 sm:pt-12">
                <form
                    action="POST"
                    id="formEstudiante"
                    className="max-w-lg mx-auto overflow-hidden rounded-md w-80 bg-slate-200 bg-opacity-80 sm:w-fit"
                >
                    <div className="p-8">
                        <img
                            className="h-7"
                            src="../../../assets/img/logo-vistasoft.png"
                            alt="logo-vistasoft"
                        />
                        <h1 className="my-4 text-3xl font-semibold text-slate-800">
                            Registrarse
                        </h1>

                        <div className="flex flex-col sm:flex-row sm:gap-5">
                            <div className="sm:w-1/2">
                                <label
                                    htmlFor="nombre"
                                    className="font-semibold text-slate-800"
                                >
                                    Nombre(s)
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="nombre"
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100"
                                    value={nombre}
                                    onChange={(e)=>setNombre(e.target.value)} required
                                    
                                />
                                <br />
                            </div>

                            <div className="sm:w-1/2">
                                <label
                                    htmlFor="apellido"
                                    className="font-semibold text-slate-800"
                                >
                                    Apellido(s)
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="apellido"
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100"
                                    value={apellido}
                                    onChange={(e)=>setApellido(e.target.value)} required
                                />
                                <br />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:gap-5">
                            <div className="sm:w-1/2">
                                <label
                                    htmlFor="codigo"
                                    className="font-semibold text-slate-800"
                                >
                                    Código SISS
                                </label>
                                <br />
                                <input
                                    type="number"
                                    id="codigo"
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100"
                                    value={cod_sis}
                                    onChange={(e)=>setCodigo(e.target.value)} required
                                />
                                <br />
                            </div>

                            <div className="sm:w-1/2">
                                <label
                                    htmlFor="correo"
                                    className="font-semibold text-slate-800"
                                >
                                    Correo electrónico
                                </label>
                                <br />
                                <input
                                    type="email"
                                    id="correo"
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100"
                                    value={correo}
                                    onChange={(e)=>setCorreo(e.target.value)} required
                                />
                                <br />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:gap-5">
                            <div className="sm:w-1/2">
                                <label
                                    htmlFor="password"
                                    className="font-semibold text-slate-800"
                                >
                                    Contraseña
                                </label>
                                <br />
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100"
                                    value={contrasenia}
                                    onChange={(e)=>setContrasenia(e.target.value)} required
                                />
                                <br />
                            </div>

                            <div className="sm:w-1/2">
                                <label
                                    htmlFor="conf-password"
                                    className="font-semibold text-slate-800"
                                >
                                    Confirmar contraseña
                                </label>
                                <br />
                                <input
                                    type="password"
                                    id="conf-password"
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100"
                                />
                                <br />
                            </div>
                        </div>

                        <div className="flex items-center gap-1 my-1">
                            <input
                                type="checkbox"
                                id="show-password"
                                className="cursor-pointer"
                            />
                            <label
                                htmlFor="show-password"
                                className="text-sm cursor-pointer select-none text-slate-800"
                            >
                                Mostrar contraseña
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full p-2 mt-2 font-semibold transition-colors rounded-md shadow-md bg-slate-800 text-slate-100 hover:bg-slate-700"
                            onClick={submitRegistro}
                        >
                            Registrarse
                        </button>

                        <div className="flex justify-center mt-2">
                            <a
                                href="./login.html"
                                className="text-xs text-center transition-colors text-slate-800 hover:underline hover:decoration-slate-800"
                            >
                                ¿Ya tienes una cuenta?{" "}
                                <strong>Inicia sesión</strong>
                            </a>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Register;
