//import Navbar from './Components/Navbar/Navbar'
import React from 'react'
 import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './Components/Home'
import Machines from './Components/Home/Machines'
import CheckNetworkTraffic from './Components/Home/CheckNetworkTraffic'
import Domains from './Components/Home/Domains'
import InternetSpeed from './Components/Home/InternetSpeed'
import Logs from './Components/Home/Logs'
import RegisterMachine from './Components/Machines/RegisterMachine'
import CheckRegisteredMachines from './Components/Machines/CheckRegisteredMachines'
import Settings from './Components/Machines/Settings'
import NewNavbar from './Components/NewNavbar'
import Details from './Components/Machines/Details'
import 'rsuite/dist/rsuite.min.css';


function App() {
  return (
    <BrowserRouter>
    
    <NewNavbar/>
    
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/machines' element={<Machines/>}/>
        <Route path='/check-network-traffic' element={<CheckNetworkTraffic/>}/>
        <Route path='/domains' element={<Domains/>}/>
        <Route path='/internet-speed' element={<InternetSpeed/>}/>
        <Route path='/logs' element={<Logs/>}/>
        <Route path='/register-machine' element={<RegisterMachine/>}/>
        <Route path='/check-registered-machines' element={<CheckRegisteredMachines/>}/>
        <Route path='/machines-settings' element={<Settings/>}/>
        <Route path='/check-registered-machines/model' element={<Details/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
