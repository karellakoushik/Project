import React from 'react'
import { useState } from 'react'

import tlogo from './images/tlogo.png'




const RegisterMachine =()=>{
    
    var [machine, setUser]=useState({
        id:"",model:"",manager:"",email:"",status:""
    });

    let name,value;
    const handleInputs=(e)=>{
        console.log(e)
        name=e.target.name
        value=e.target.value
        setUser({...machine,[name]:value})

    }
    const PostData=async (e)=>{
        e.preventDefault()
        const{id,model,manager,email,status}=machine
        const res=await fetch("http://localhost:5000/machines/registerMachine",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body:JSON.stringify({
                id,model,manager,email,status
            })
        })
        const data=await res.json();
        if(res.status===422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }else{
            window.alert("Registration Successful")
            console.log("Registration Successful")
           

        }
    }
 
    return (
    <div  className='formborder'>
      <form method='POST'>
        <div className='timages'>
          <figure>
              <img className="timages" src={tlogo} alt="telstra logo"/>
          </figure>
        </div>
        <h3 >Machine Registration</h3>
        <div className="mb-3">
          
          <input
            type="text"
            name="id"
            id="id"
            autoComplete='off'
            className="form-control"
            value={machine.name} onChange={handleInputs} placeholder="Enter Machine Id"
          />
        </div>
        <div className="mb-3">
          {/* <label>Model Number</label> */}
          <input type="text" name='model' autoComplete='off' className="form-control" value={machine.model} onChange={handleInputs} placeholder="Enter Model Number" />
        </div>

        <div className="mb-3">
          {/* <label>Manager's Name</label> */}
          <input type="text" name="manager" autoComplete='off' className="form-control" value={machine.manager} onChange={handleInputs} placeholder="Enter Machine's Manager Name" />
        </div>
        <div className="mb-3">
          {/* <label>Manager's Email </label> */}
          <input
            type="email"
            name="email"
            className="form-control"
            autoComplete='off'
            value={machine.email} onChange={handleInputs} placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
        <input type="text" name="status" autoComplete='off' className="form-control" value={machine.status} onChange={handleInputs} placeholder="Status : Online or Offline" />
        </div>
    
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={PostData}>
            Register
          </button>
        </div>
        
      </form>
      
      </div>
      
    )
}
export default RegisterMachine