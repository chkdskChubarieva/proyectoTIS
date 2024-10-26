import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet, useNavigate} from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'

const LayoutEstudiante = () => {
  const {getRol} = AuthUser()
  const navigate = useNavigate()

  useEffect(() => {
    if(getRol()!="estudiante"){
      navigate("/")
    }
  },[])
  
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default LayoutEstudiante