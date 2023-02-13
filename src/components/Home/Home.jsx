import React from 'react'
import './Home.scss'
import Co2Icon from '../../images/Icons/co2.svg'
import MethaneIcon from '../../images/Icons/methane.svg'
import OceanIcon from '../../images/Icons/ocean.svg'
import PolarIcon from '../../images/Icons/polar.svg'
import TemperatureIcon from '../../images/Icons/temperature.svg'
import NitrousIcon from '../../images/Icons/nitrous.svg'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className='home'>
        <Link to={"/Temperature"}>
            <div className='home-card'>
                <div className='home-icon'>
                    <img src={TemperatureIcon} alt="" />
                    <h1>Temperature</h1>
                </div>
                <h6>Global temperature anomalies</h6>
            </div>
        </Link>

        <Link to={"/Co2"}>
            <div className='home-card'>
                
                <div className='home-icon'>
                    <img src={Co2Icon} alt="" />
                    <h1>Co2</h1>
                </div>
                <h6>Carbon Dioxide levels</h6>
            </div>
        </Link>

        <Link to={"/Methane"}>
            <div className='home-card'>
                <div className='home-icon'>
                    <img src={MethaneIcon} alt="" />
                    <h1>Methane</h1>
                </div>
                <h6>Methane levels</h6>
            </div>
        </Link>

        <Link to={"/PolarIce"}>
            <div className='home-card'>
                <div className='home-icon'>
                    <img src={PolarIcon} alt="" />
                    <h1>Polar Ice</h1>
                </div>
                <h6>Melted Polar Ice Caps</h6>
            </div>
        </Link>

        <Link to={"/Nitrous"}>
            <div className='home-card'>
                
                <div className='home-icon'>
                    <img src={NitrousIcon} alt="" />
                    <h1>N2o</h1>
                </div>
                <h6>Nitrous Oxide levels</h6>
            </div>
        </Link>

        <Link to={"/OceanWarming"}>
            <div className='home-card'>
                
                <div className='home-icon'>
                    <img src={OceanIcon} alt="" />
                    <h1>Ocean Warming</h1>
                </div>
                <h6>Global Ocean Temperature</h6>
            </div>
        </Link>

    </div>
  )
}

export default Home