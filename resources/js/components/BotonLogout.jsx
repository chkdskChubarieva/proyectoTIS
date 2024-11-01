import React from 'react'
import AuthUser from '../pageauth/AuthUser'
import Config from '../Config'
const BotonLogout = ({ hrefBoton, nombreBoton }) => {
  const {getLogout} = AuthUser()
  
  const logoutUser =()=>{
    Config.getLogout('/logout').then(response=>{
      getLogout();
      console.log(response)
      
    })
  }

  return (
    <>
    
    <a
      href={hrefBoton}
      className="p-2 transition-all bg-white rounded bg-opacity-5 hover:bg-opacity-10 hover:shadow"
      onClick={logoutUser}
    >
      {nombreBoton}
    </a>
    
    </>
  )
}

export default BotonLogout