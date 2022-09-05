import React from "react";
import machine from './machine';
import Domain from './domain';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';


const Mainer = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/machine" component={machine} />
                <Route exact path="/domain" component={Domain} />
            </Switch>
        </Router>
    );
}

export default Mainer;