import React, { Component } from 'react';
import './stylesheets/Signup.css';

class Signup extends Component {
    render() {
        return (
            <div className="page">
                {/* Title message */}
                <div className="signup-title">
                <p id="login-welcome">Create your rides account today!</p>
                </div>

                {/* The division containing everything about signup */}
                <div className="signup-block">

                    {/* Left block and its input fields */}
                    <div id="left-block">

                        <p className="signup-text"> Display name: </p>
                        <input type="text" className="signup-input" id="display-name"
                        placeholder="Gary Gillespie"/>
                        
                        <p className="signup-text"> Email address: </p>
                        <input type="text" className="signup-input" id="email-address"
                        placeholder="example@gmail.com"/>
                        
                        <p className="signup-text"> Password: </p>
                        <input type="password" className="signup-input" id="password"
                        placeholder="7-16 characters"/>
                        
                        <p className="signup-text"> Confirm password: </p>
                        <input type="password" className="signup-input" id="confirm-password"
                        placeholder="Must match with above"/>
                    </div>

                    {/* Right block and its components */}
                    <div id="right-block">
                        <p className="signin-right-text">
                            Already have an account? &nbsp;
                            <a href="./login" id="login-link">Log in here</a>
                        </p>
                        <br/>
                        <p className="signin-right-text" id="coming-soon">
                            Sign-in with Google coming soon!
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Signup;