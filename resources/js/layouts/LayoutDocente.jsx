import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet, useNavigate} from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'

const LayoutDocente = () => {
  const {getRol} = AuthUser()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(getRol!="docente"){
      navigate("/")
    }
  },[])

  return (
    <>
    <h1>Docentes</h1>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default LayoutDocente