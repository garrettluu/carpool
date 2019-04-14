//React import
import React, { Component } from 'react';

//Routing
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import Home from './Home';

//CSS stuff
import logo from './images/sports-car.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div id="header">
                        <div id="title-bar" className="nav-bar">
                            <div className="nav-group">
                                <NavLink id="company" className="nav-link" to="/"> Carpool </NavLink>
                             i  <NavLink id="logo-link" to="/">
                                    <img src={logo} height="60px" alt="logo">
                                    </img>
                                </NavLink>
                                <NavLink id="rides-link" className="nav-link" to="/rides"> Rides </NavLink>
                                <NavLink id="drive-link" className="nav-link" to="/drive"> Drive </NavLink>
                            </div>
                            <div class="nav-group">
                                <NavLink id="signup-link" className="nav-link" to="/signup"> Sign Up </NavLink>
                                <NavLink id="login-link" className="nav-link" to="/login"> Login </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
