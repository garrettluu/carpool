import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div id="ridesharing-redefined">
                    <p id="pitch-tag1">Ridesharing.</p>
                    <p id="pitch-tag2">Redefined.</p>
                </div>
                <div id="welcome-messages">
                    <div>
                        <h3 class="titles-home" id="introduction">
                            The fastest way to get a ride.
                        </h3>
                        <p class="descriptions" id="about">
                            Just enter where you want to go, and it will find nearest cars available to you, updated in real time.
                        </p>
                    </div>

                    <h3 class="titles-home">
                        Anyone can sign up, anyone can become a driver!
                    </h3>
                    <p class="descriptions">
                        You just need to set up an account with your information and you can start driving!
                    </p>

                    <h3 class="titles-home">
                        To ride, you need credits, which can be earned by being a driver yourself!
                    </h3>
                    <p class="descriptions">
                        We do this to incentivize a community of ridesharers and contributers to the community.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
