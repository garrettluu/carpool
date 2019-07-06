import React, { Component } from 'react';
//import REACTDOM from 'react-dom';
import './stylesheets/Signup.css';

/* ------------------------Error Handling------------------------ */
// The message that appears if user name is null
const nullNameHandler = WrappedComponent => 
                        ({ nameIsNull, nameHasBeenClicked}) => {
    // Determines if we need to check the name field
    var shouldCheckError = false;
    if(nameHasBeenClicked){
        shouldCheckError = true;
    }

    // If we don't need to check, don't display the error message
    if( !shouldCheckError ){
        return null;
    }

    // If we have something in the name field, don't display the error message
    if(!nameIsNull){
        return null;
    }

    // Otherwise, display the error message
    return (
        <WrappedComponent>
            <div className="error-message">Error : User name can not be empty</div>
        </WrappedComponent>
    );
}

// Now we build this message...
const DivNullName = nullNameHandler(({ children }) => <div>{children}</div>)

/* -------------------------------Class body------------------------------------ */
class Signup extends Component {

    // Default state of this page
    state = { name: null,
              nameIsNull: true,
              nameHasBeenClicked: false,
              currentSelection:null
            }

    /* -----------------------Functions to change state --------------------*/

    /**
     * Handles the change of display name
     * 
     * @Param event The event in which the input value is changed
     */
    changeName = (event) => {
        // Initialization; get the current name
        var emptyName = false;
        var displayNameValue = event.target.value;
        // Decide if the name is empty
        if(displayNameValue == ""){
            emptyName=true;
        }
        // Change the states accordingly
        this.setState({
            nameIsNull:emptyName,
            name:displayNameValue
        })
    }

    /**
     * Handles when the name input is selected
     */
    nameClicked = () =>{
        this.setState({
            nameHasBeenClicked:true,
            currentSelection:"name"
        })
    }

    /**
     * Checks the user info entered, then creates a new user if success
     */
    createUser = () => {
        return {
            nameIsNull: this.state.nameIsNull
        };

    }

    /*-------------------All the visual contents---------------- */
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

                        {/* Text box for name */}
                        <p className="signup-text"> Display name: </p>
                        <input type="text" ref="displayName" onChange={this.changeName} 
                        onFocus={this.nameClicked}
                            placeholder="Gary Gillespie" />

                        {/* Possible error message for name is null */}
                        <DivNullName nameIsNull={this.state.nameIsNull} 
                        nameHasBeenClicked={this.state.nameHasBeenClicked}
                        currentSelection={this.state.currentSelection}/>

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