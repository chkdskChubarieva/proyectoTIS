import React from "react";
import { useLocation } from "react-router-dom";
import logo_umss from "../assets/img/logo-umss.png";
import logo_umss_simple from "../assets/img/logo-umss-simple.png";
import BotonHeader from "./BotonHeader";
import BotonLogout from "./BotonLogout";
import BotonUser from "./BotonUser";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";

const Header = () => {
    const location = useLocation(); 

    const { getLogout } = AuthUser();

    const logoutUser = () => {
        Config.getLogout()
            .then((response) => {
                getLogout();
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // insertaar aqui las rutas donde se debe mostrar un boton en especifico
    const rutasLogin = ["/login"];
    const rutasRegister = ["/register", "/"];
    const rutasEstudiante = ["/estudiante"];
    const rutasDocente = ["/docente"];

    // aqui tambien
    const esLogin = rutasLogin.includes(location.pathname);
    const esRegister = rutasRegister.includes(location.pathname);
    const esPanelEst = rutasEstudiante.includes(location.pathname);
    const esPanelDoc = rutasDocente.includes(location.pathname);

    return (
        <>
            <header id="inicio" className="h-20">
                <div className="flex items-center justify-between h-20 px-4 fila-1">
                    <div className="px-3 py-1 bg-white rounded">
                        <img
                            className="w-8 sm:hidden"
                            src={logo_umss_simple}
                            alt=""
                        />
                        <img
                            className="hidden w-28 sm:block"
                            src={logo_umss}
                            alt="logo-umss"
                        />
                    </div>

                    <span className="text-xl font-bold text-slate-200 sm:text-2xl">
                        EBEP - UMSS
                    </span>

                    <div className="font-semibold rounded-md text-slate-200">
                        {esLogin ? (
                            <BotonHeader
                                hrefBoton={"/register"}
                                nombreBoton={"Registrarse"}
                            />
                        ) : esRegister ? (
                            <BotonHeader
                                hrefBoton={"/login"}
                                nombreBoton={"Iniciar sesión"}
                            />
                        ) : esPanelEst || esPanelDoc ? (
                            <BotonUser />
                        ) : null}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
