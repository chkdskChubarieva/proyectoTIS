import React from 'react'

import logo_umss from "../../../assets/img/logo-umss.png";
import logo_umss_simple from "../../../assets/img/logo-umss-simple.png";

const Navbar = () => {
  return (
    <>
            <header id="inicio" className="h-32">
                <div className="fila-1 flex h-20 items-center justify-between px-4">
                    <div className="rounded bg-white px-3 py-1">
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

                    <div className="rounded-md font-semibold text-slate-200">
                        <a
                            href="./login.html"
                            className="rounded bg-white bg-opacity-5 p-2 transition-all hover:bg-opacity-10 hover:shadow"
                        >
                            Iniciar sesión
                        </a>
                    </div>
                </div>

                <div className="fila-2 flex h-12 items-center justify-center bg-slate-200">
                    <ul className="text-md flex h-full items-center gap-2 font-semibold text-slate-500 sm:gap-4">
                        <li className="flex h-full items-center px-3 transition-colors hover:bg-slate-100">
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li className="flex h-full items-center px-3 transition-colors hover:bg-slate-100">
                            <a href="#caracteristicas">Caracteristicas</a>
                        </li>
                        <li className="flex h-full items-center px-3 transition-colors hover:bg-slate-100">
                            <a href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
  )
}

export default Navbar