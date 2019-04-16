import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

import './stylesheets/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Parallax y={[-100, 64]}>
                    <div id="ridesharing-redefined">
                        <p id="pitch-tag1">Ridesharing.</p>
                        <p id="pitch-tag2">Redefined.</p>
                    </div>
                </Parallax>
                <div id="welcome-messages">
                    <div className="welcome-message">
                        <h3 className="titles-home" id="introduction">
                            The fastest way to get a ride.
                        </h3>
                        <p className="descriptions" id="about">
                            Carpool is the fastest, cheapest way to get to your destination.
                            Just enter where you want to go, and it will find nearest cars available to you, updated in real time.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="welcome-message">
                        <h3 className="titles-home">
                            Decentralized driving.
                        </h3>
                        <p className="descriptions">
                            Anyone can sign up and become a driver.
                            You just need to set up an account with your information and you can start driving!
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="welcome-message">
                        <h3 className="titles-home">
                            Earn credits by driving.
                        </h3>
                        <p className="descriptions">
                            By driving others, you can earn credits, which can be used for free rides from other drivers.
                            We do this to incentivize a community of ridesharers and contributors to the community.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
