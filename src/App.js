import Navbar from './Components/Navbar/Navbar'
import React from 'react'
 import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Machines from './Components/Home/Machines'
import CheckNetworkTraffic from './Components/Home/CheckNetworkTraffic'
import Domains from './Components/Home/Domains'
import InternetSpeed from './Components/Home/InternetSpeed'
import Logs from './Components/Home/Logs'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/machines' element={<Machines/>}/>
        <Route path='/check-network-traffic' element={<CheckNetworkTraffic/>}/>
        <Route path='/domains' element={<Domains/>}/>
        <Route path='/internet-speed' element={<InternetSpeed/>}/>
        <Route path='/logs' element={<Logs/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
