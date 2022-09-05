import React, { Component, useEffect,useState } from 'react';
import './styles/home.css';
import axios from 'axios';
import Chart from './chart';
import { useNavigate ,Link} from 'react-router-dom';
axios.defaults.withCredentials = true


const Home = ()=>{

        const history = useNavigate ();
        const check = async ()=>{
            try{
                await axios.get('http://localhost:3001/users').then(res=>{
                    if(!res.status===200){
                        const error = new Error(res.error);
                        throw error;
                    }
                })
            }catch(err){
                //console.log(err);
                history("/login");
            }
        }
        useEffect(()=>{
             check();
        },[]);

        const t = false;
        
        

        // const auth = localStorage.getItem("id");
        const auth1 = axios.defaults.headers.common["id"];
        
//{user?ren:<Redirect to="/login" />}



        const ren = (<div className='main-head'>
                        <h1>Hello welcome</h1>
                        {/* <Link to="/machine">Machine</Link><br/>
                        <Link to="/domain">Domain</Link> */}
                            <Chart/>
                    </div>);

        return (
            <React.Fragment>
                {ren}
            </React.Fragment>
        );
}
 
export default Home;

{/* <Navbar>
                            <Navbar.Brand href="#">RSUITE</Navbar.Brand>
                            <Nav>
                            <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
                            <Nav.Item>News</Nav.Item>
                            <Nav.Item>Products</Nav.Item>
                            <Nav.Menu title="About">
                                <Nav.Item>Company</Nav.Item>
                                <Nav.Item>Team</Nav.Item>
                                <Nav.Menu title="Contact">
                                <Nav.Item>Via email</Nav.Item>
                                <Nav.Item>Via telephone</Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                            </Nav>
                            <Nav pullRight>
                            <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
                            </Nav>
                        </Navbar> */}