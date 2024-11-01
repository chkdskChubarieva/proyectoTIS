import React from 'react'

import Header from '../components/Header'
import Navbar from '../components/Navbar'

const PanelEst = () => {

    const botonesNavbar = [{ nombreBoton: ' ', hrefBoton: '#' }]

  return (
    <>
    
    <Header nombreBoton={'Logout'} hrefBoton={'/'} />
            <Navbar botones={botonesNavbar} />
    
    </>

  )
}

export default PanelEst