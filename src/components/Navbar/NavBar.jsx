import React from 'react'
import { useEffect, useState } from "react";

import Logo from '../../images/Globe.svg'
import './NavBar.scss'
import { Link } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'

function NavBar() {
  const [isOpen, setOpen] = useState(false)

  return (
    
    <div className='nav-bg'>
      <div className='navbar'>
        <div className='nav-logo'>
            <Link to={"/Home"}>
              <img src={Logo} alt="Globe logo" />
            </Link>
          </div>
        
        <div className='nav-category'>
          <div className='nav-hamburger'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        { isOpen ?
          <div className='nav-components'>
            <Link to={"/Temperature"}>
              <h3>Temperature</h3>
            </Link>
            <Link to={"/Co2"}>
              <h3>Co2</h3>
            </Link>
            <Link to={"/Methane"}>
              <h3>Methane</h3>
            </Link>
            <Link to={"/PolarIce"}>
              <h3>Polar Ice</h3>
            </Link>
            <Link to={"/Nitrous"}>
              <h3>N2o</h3>
            </Link>
            <Link to={"/OceanWarming"}>
              <h3>Ocean Warming</h3>
            </Link>
          </div>
        : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar