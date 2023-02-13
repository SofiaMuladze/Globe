import React from 'react'
import {Route, Routes} from "react-router-dom"
import Co2  from './Charts/Co2'
import Methane from './Charts/Methane'
import Nitrous from './Charts/Nitrous';
import PolarIce from './Charts/PolarIce';
import OceanWarming from './Charts/OceanWarming';
import Temperature from './Charts/Temperature';
import Home from './Home/Home';


function Pages() {
  return (
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Methane" element={<Methane />} />
        <Route path="/PolarIce" element={<PolarIce />} />
        <Route path="/Nitrous" element={<Nitrous />} />
        <Route path="/OceanWarming" element={<OceanWarming />} />
        <Route path="/Temperature" element={<Temperature />} />
        <Route path="/Co2" element={<Co2 />} />


  </Routes>
  )
}

export default Pages