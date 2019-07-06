import React, { Component } from 'react';
import REACTDOM from 'react-dom';
import './stylesheets/Signup.css';

/**
  * Error messages that appear conditionally
  */

// The message that appears if user name is null
const nullNameHandler = WrappedComponent => ({ nameIsNull, children }) => {
    console.log("nameIsNull: " + nameIsNull); // Debug message
    return (
        <WrappedComponent>
            {nameIsNull && <div className="error-message">Error : User name can not be null</div>}
        </WrappedComponent>
    );
}
// Now we build this message...
const DivNullName = nullNameHandler(({ children }) => <div>{children}</div>)

class Signup extends Component {

    // Defaults all the error messages to false
    state = { nameIsNull: false,
              name: null
            }

    /**
     * Handles the change of display name
     */
    changeName = (event) => {
        var emptyName = false;
        var displayName = event.target.value;
        console.log("Display name :" + displayName);
        if(displayName == null){
            emptyName=true;
        }
        this.setState({
            nameIsNull:emptyName,
            name:displayName
        })
    }
    /**
     * Checks the user info entered, then creates a new user if success
     */
    createUser = () => {
        // Processes the name 
        var name = REACTDOM.findDOMNode(this.refs.displayName).nodeValue;
        console.log(this.refs);
        console.log("Name:" + name); // Debug message
        // Check for empty names
        var nameIsEmpty = false;
        if (name == null) {
            nameIsEmpty = true;
        }
        console.log("nameIsEmpty:" + nameIsEmpty); // Debug message
        // TODO : Need to process duplicate names
        // TODO : More error handling

        // Returns a bunch of properties...
        return {
            nameIsNull: nameIsEmpty
        };

    }

    render() {
        console.log("nameIsNull: " + this.state.nameIsNull); // Debug message
        /* Returns the frontend stuff */
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

                        {/* Text box for name */}
                        <p className="signup-text"> Display name: </p>
                        <input type="text" ref="displayName" onChange={this.changeName}
                            placeholder="Gary Gillespie" />

                        {/* Possible error message for name is null */}
                        <DivNullName nameIsNull={this.state.nameIsNull} />

                        {/* Text box for email */}
                        <p className="signup-text"> Email address: </p>
                        <input type="text" ref="emailAddress"
                            placeholder="example@gmail.com" />

                        {/* Text box for password */}
                        <p className="signup-text"> Password: </p>
                        <input type="password" ref="password"
                            placeholder="7-16 characters" />

                        {/* Text box for confirm password */}
                        <p className="signup-text"> Confirm password: </p>
                        <input type="password" ref="confirmPassword"
                            placeholder="Must match with above" />

                        {/* Breaks for style purposes */}
                        <br /><br />

                        {/* The button to submit the info entered */}
                        <button className="material-button" onClick={this.createUser.bind(this)}>
                            Sign Up
                        </button>
                    </div>

                    {/* Right block and its components */}
                    <div id="right-block">

                        {/* Option to sign in with an existing account */}
                        <p className="signin-right-text">
                            Already have an account? &nbsp;
                            <a href="./login" id="login-link">Log in here</a>
                        </p>

                        <br />

                        {/* Might try to figure out the Google API */}
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