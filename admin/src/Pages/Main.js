import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import Admin from './Admin'
function Main(){
    return (
        <Router>      
            <Route path="/login/" exact component={Login} />
            <Route path="/admin/" exact component={Admin} />
        </Router>
    )
}
export default Main