import { useLocation } from "react-router-dom";
function Details(){
    const loc=useLocation()
    const model=loc.state.model;
    const status=loc.state.status;
    const email=loc.state.email;
    const manager=loc.state.manager
    return(
        <div>
            <h1 className="App">Machine Details</h1><br/><br/>
            <table className="App-table"> 
                        <tr>
                            <th>Model</th>
                            <th>Status</th>
                            <th>Manager</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>{model}</td>
                            <td>{status}</td>
                            <td>{manager}</td>
                            <td>{email}</td>
                        </tr>       
            </table>   
        </div>
    )
}
export default Details