import axios from "axios";
import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import './styles/eachmachine.css';
import Chart from "./chart";
import { useNavigate } from "react-router-dom";

const EachMachine = () => {

    const history = useNavigate ();

    const { id } = useParams();
    const [machine, setMachine] = useState([]);

    console.log(id);
    const check = async ()=>{
        try{
            await axios.post('http://localhost:3001/getmachine',{id}).then(res=>{
                if(!res.status===200){
                    const error = new Error(res.error);
                    throw error;
                }
                console.log(res.data);
                setMachine(res.data);
            })
        }catch(err){
            console.log(err);
            history("/machine");
        }
    }
    useEffect(()=>{
         check();
    },[]);

    return (
        <div className="each-machine">
            <div className="main">
            <h1>{machine.MachineName}</h1>
            <h5>{machine.Status}</h5>
            <h5>{machine.MachineNumber}</h5>
            <h5>{machine.MachineEmail}</h5>
            <h5>{machine.domain?machine.domain:null}</h5>
            </div>
            <div className="content">
            <Chart/>
            </div>
        </div>
    );
}

export default EachMachine;