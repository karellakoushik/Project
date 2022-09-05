import React  from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


export default class Getmachines extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            info:[],
            result:[],
            IsTableVisible: false
        }
        this.showMachineData=this.showMachineData.bind(this)
    }
    componentDidMount() 
    {
        axios.get('http://localhost:5000/machines/get-machines')
        .then(response=>{
            this.setState({info:response.data})
        })
        .catch(err=>{
            console.log(err)  
        })
        
    }

    showMachineData = () => {this.setState({IsTableVisible: true});}
    hideMachineData = () => {this.setState({IsTableVisible: false});}

    render() 
    {
        return <div>
            <h1>List of registered machines</h1>
            {this.state.IsTableVisible===false? <button onClick={this.showMachineData} >
                Show machines
            </button>:null}
            <br/><br/>
            {this.state.IsTableVisible===true?<button onClick={this.hideMachineData}>Hide machines</button>:null}
            <br/><br/>

            {this.state.IsTableVisible === true ?
            <div>
                <table className="App-table"> 
                    <thead>
                        <tr>
                        <th>Machine name</th>
                        <th>Status</th>
                        <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.info.length ?
                        this.state.info.map(e=>{
                            return(
                                    <tr>
                                    <td>{e.model}</td>
                                    <td>{e.status}</td>
                                    <td>
                                        <Link to={'/check-registered-machines/model'} 
                                        state={{model:e.model, status: e.status, manager:e.manager, email:e.email}}>
                                        <button >Show Details</button>
                                        </Link>
                                        </td>
                                    </tr>)})
                                    :null
                        }
                    </tbody>
                </table>
            </div>
            : null}
        </div>
        
    }

}
