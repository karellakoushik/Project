import react from 'react';
import reactDOM from 'react-dom';
import { Outlet } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home';
import Connect from './components/login';
import Register from './components/register';
import Machine from './components/machine';
import Domain from './components/domain';
import Sidenavi from './components/sidenavi';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Authsys from './authsys';
import Compsys from './compsys';
import EachMachine from './components/each_machine';

function App(){


    return(<>
            <Routes>
                <Route element={<Authsys />}>
                <Route exact path="/" element={<Connect/>}/>
                <Route exact path="/login" element={<Connect/>} />
                <Route exact path="/register" element={<Register/>} />
                </Route>
                <Route element={<Compsys/>}>
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/machine" element={<Machine/>} />
                <Route exact path="/domain" element={<Domain/>} />
                <Route exact path="/machine/:id" element={<EachMachine/>} />
                </Route>
            </Routes>
            </>
    );
}

export default App;