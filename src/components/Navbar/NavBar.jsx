import React from 'react'
import Logo from '../../images/Globe.svg'
import './NavBar.scss'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    
    <div className='nav'>
      <div className='nav-category'>
      <Link to={"/Temperature"}>
        <h3>Temperature</h3>
      </Link>
      <Link to={"/Co2"}>
        <h3>Co2</h3>
      </Link>
      <Link to={"/Methane"}>
        <h3>Methane</h3>
      </Link>

      </div>
        <div className='nav-logo'>
          <Link to={"/Home"}>
            <img src={Logo} alt="Globe logo" />
          </Link>
        </div>
        <div className='nav-category'>
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
    </div>
  )
}

export default NavBar