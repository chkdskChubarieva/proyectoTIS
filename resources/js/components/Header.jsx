import React from 'react'
import { useLocation } from 'react-router-dom'
import logo_umss from '../../../assets/img/logo-umss.png'
import logo_umss_simple from '../../../assets/img/logo-umss-simple.png'
import Navbar from './Navbar'
import BotonHeader from './BotonHeader'
import BotonLogout from './BotonLogout'
import AuthUser from '../pageauth/AuthUser'
import Config from '../Config'

const Header = ({ nombreBoton, hrefBoton }) => {

  const location = useLocation() // Obtenemos la ruta actual

  
  const {getLogout} = AuthUser()
  
  const logoutUser =()=>{
    Config.getLogout()
    .then(response=>{
      getLogout();
      console.log(response)
      
    }).catch(error=>{
      console.error(error);
    })
  }
  // Definimos las rutas donde se debe mostrar BotonLogout
  const rutasLogout = ['/panel-est']

  // Comprobamos si la ruta actual coincide con alguna de las rutas donde se muestra BotonLogout
  const esLogout = rutasLogout.includes(location.pathname)

  return (
    <>
      <header id="inicio" className="h-20">
        <div className="flex items-center justify-between h-20 px-4 fila-1">
          <div className="px-3 py-1 bg-white rounded">
            <img className="w-8 sm:hidden" src={logo_umss_simple} alt="" />
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
          <button

            className="w-full p-2 mt-2 font-semibold transition-colors rounded-md shadow-md bg-slate-800 text-slate-100 hover:bg-slate-700"
            onClick={logoutUser}
          >
            Logout
          </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
