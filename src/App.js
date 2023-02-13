import React from 'react';
import logo from './logo.svg';
import './App.css';
import Co2 from './components/Charts/Co2';
import Methane from './components/Charts/Methane';
import Nitrous from './components/Charts/Nitrous';
import PolarIce from './components/Charts/PolarIce';
import OceanWarming from './components/Charts/OceanWarming';
import Temperature from './components/Charts/Temperature';
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter } from "react-router-dom"
import Pages from './components/Pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Pages />
      {/* <Home />
      <Temperature />
      <Co2 />
      <Methane />
      <Nitrous />
      <PolarIce />
      <OceanWarming /> */}

    </BrowserRouter>

    </div>
  );
}

export default App;
