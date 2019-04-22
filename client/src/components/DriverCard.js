import React, { Component } from 'react';

class DriverCard extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.seats = props.seats;
    }

    render() {
        return (
            <div className="DriverCard driver">
                <p className="driver-name">
                    {this.name}
                </p>
                <p className="driver-seats">
                    Seats Available: {this.seats}
                </p>
                <button className="material-button">
                    Reserve
                </button>
            </div>
        );
    }
}

export default DriverCard;
