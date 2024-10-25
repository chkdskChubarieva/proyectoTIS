import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'
const LayoutPublic = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default LayoutPublic