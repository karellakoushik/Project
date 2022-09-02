import React  from "react";
import axios from "axios";

export default class CheckRegisteredMachines extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            info:[],
            result:[]
        }
        this.showbehaviour=this.showbehaviour.bind(this)
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
    showbehaviour=()=>{
        const {info}=this.state
       this.setState({result:( <>
            {
            info.length ?
            info.map(e=><p key={e.model}>{e.model} {e.status}</p>):null
            }
            </>)})
    }

    render() 
    {
        return <div>
        <h1>List of registered machines</h1>
        <button
        onClick={this.showbehaviour}
        >Show machines</button>
        {this.state.result}
        </div>
        
    }

}
