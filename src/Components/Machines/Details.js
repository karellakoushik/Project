import { useLocation } from "react-router-dom";
function Details(){
    const loc=useLocation()
    const model=loc.state.model;
    const status=loc.state.status
    return(
        <div>{model} {status}</div>
    )
}
export default Details