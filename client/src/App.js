import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="header">
                    <div id="title-bar" class="nav-bar">
                        <div class="nav-group">
                            <a id="company" class="nav-link" href = "/"> Carpool </a>
                            <a id="logo-link" href="/">
                                <img src="./images/sports-car.svg" height="60px" >
                                </img>
                            </a>
                            <a id="rides-link" class="nav-link" href="/rides"> Rides </a>
                            <a id="drive-link" class="nav-link" href = "/drive"> Drive </a>
                        </div>
                        <div class="nav-group">
                            <a id="signup-link" class="nav-link" href = "/signup"> Sign Up </a>
                            <a id="login-link" class="nav-link" href = "/login"> Login </a>
                        </div>
                    </div>
                </div>
                <div className="content">
                </div>
            </div>);
        }
    }

    export default App;
