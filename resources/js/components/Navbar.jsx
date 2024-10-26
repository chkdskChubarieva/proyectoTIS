import React from 'react'

import logo_umss from "../../../assets/img/logo-umss.png";
import logo_umss_simple from "../../../assets/img/logo-umss-simple.png";

const Navbar = () => {
  return (
    <>
            <header id="inicio" className="h-32">
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
                        <a
                            href="./login"
                            className="p-2 transition-all bg-white rounded bg-opacity-5 hover:bg-opacity-10 hover:shadow"
                        >
                            Iniciar sesión
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-center h-12 fila-2 bg-slate-200">
                    <ul className="flex items-center h-full gap-2 font-semibold text-md text-slate-500 sm:gap-4">
                        <li className="flex items-center h-full px-3 transition-colors hover:bg-slate-100">
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li className="flex items-center h-full px-3 transition-colors hover:bg-slate-100">
                            <a href="#caracteristicas">Caracteristicas</a>
                        </li>
                        <li className="flex items-center h-full px-3 transition-colors hover:bg-slate-100">
                            <a href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
  )
}

export default Navbar