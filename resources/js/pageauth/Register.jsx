import React, { useState, useEffect, useRef } from "react";
import Config from '../Config';
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";
import LogoVistaSoft from "../../../assets/img/logo-vistasoft.png";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Register = () => {
    const {getToken} = AuthUser();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [correo, setCorreo] = useState("");
    const [cod_sis, setCodigo] = useState("");
    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate();

    const passwordInput = useRef(null);
    const passwordConfInput = useRef(null);
    const showPasswordCheckbox = useRef(null);
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        if(getToken()){
          navigate("/")
        }
      },[])

      const submitRegistro = async(e) => {
        e.preventDefault();

        // Validacion de correo institucional y contraseña
        if (!correo.endsWith("@est.umss.edu")) {
            setEmailError("Debe usar su correo institucional");
            return;
        }

        if (contrasenia !== passwordConfInput.current.value) {
            setPasswordError("Las contraseñas no coinciden");
            return;
        }

        Config.getRegister({nombre, apellido, contrasenia, correo, cod_sis})
        .then(({data})=>{
            if(data.success){
                navigate("/login");
            }
        })
    }

    //Agregar codigo Javascript

    const togglePasswordVisibility = () => {
        if (showPasswordCheckbox.current) {
            const isChecked = showPasswordCheckbox.current.checked;
            // Cambiar el tipo de ambos campos
            if (passwordInput.current) {
                passwordInput.current.type = isChecked ? "text" : "password";
            }
            if (passwordConfInput.current) {
                passwordConfInput.current.type = isChecked ? "text" : "password";
            }
        }
    };

    useEffect(() => {
        if (showPasswordCheckbox.current) {
            showPasswordCheckbox.current.addEventListener("change", togglePasswordVisibility);
        }
        return () => {
            if (showPasswordCheckbox.current) {
                showPasswordCheckbox.current.removeEventListener("change", togglePasswordVisibility);
            }
        };
    }, []);

    useEffect(() => {
        const verificarContraseñas = () => {
          if (passwordInput.current.value !== passwordConfInput.current.value) {
            setPasswordError("Las contraseñas no coinciden");
          } else {
            setPasswordError("");
          }
        };
      
        passwordConfInput.current.addEventListener("input", verificarContraseñas);
      
        return () => {
          passwordConfInput.current.removeEventListener("input", verificarContraseñas);
        };
    }, []);

    const botonesNavbar = [{ nombreBoton: 'Inicio', hrefBoton: '/' }]


    return (
        <>
            <Header nombreBoton={'Iniciar sesión'} hrefBoton={'/login'} />
            <Navbar botones={botonesNavbar} />

            <main className="py-12 sm:pb-0 sm:pt-12">
                <form
                    action="POST"
                    id="formEstudiante"
                    className="max-w-lg mx-auto overflow-hidden rounded-md w-80 bg-slate-200 bg-opacity-80 sm:w-fit"
                >
                    <div className="p-8">
                        <img
                            className="h-7"
                            src={LogoVistaSoft}
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
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                                    value={cod_sis}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 9) {
                                            setCodigo(e.target.value);
                                        }
                                    }}
                                    required
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
                                    onChange={(e) => setCorreo(e.target.value)} 
                                    onBlur={(e) => {
                                        if (!e.target.value.endsWith("@est.umss.edu")) {
                                        setEmailError("Debe usar su correo institucional");
                                        } else {
                                        setEmailError("");
                                        }
                                    }} 
                                    required
                                />
                                <br />

                                {emailError && (
                                <span className="flex text-xs text-red-500">
                                    {emailError}
                                </span>
                                )}
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
                                    ref={passwordInput}
                                    type="password"
                                    id="password"
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100"
                                    value={contrasenia}
                                    onChange={(e) => {
                                        setContrasenia(e.target.value);
                                        if (e.target.value !== passwordConfInput.current.value) {
                                          setPasswordError("Las contraseñas no coinciden");
                                        } else {
                                          setPasswordError("");
                                        }
                                    }}
                                    required
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
                                    ref={passwordConfInput}
                                    type="password"
                                    id="conf-password"
                                    className="w-full px-2 py-1 my-1 bg-opacity-50 border rounded-md border-slate-800 bg-slate-100"
                                />
                                <br />
                            </div>
                        </div>

                        <div className="flex items-center justify-between w-full my-1">
                            <div className="flex gap-1">
                                <input
                                    ref={showPasswordCheckbox}
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

                            <span className="text-xs text-red-500">
                                    {passwordError}
                            </span>
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
                                href="./login"
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
