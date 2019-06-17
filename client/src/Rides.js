import React, {Component} from 'react';
import DriverCard from './components/DriverCard';
import axios from 'axios';

import './stylesheets/Rides.css';

class Rides extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://localhost:3001/update')
            .then((response) => {
                this.setState({
                    data: response.data
                });
            });
    }

    static newDriverCard(name, seats) {
        return (
            <DriverCard name={name}
                        seats={seats}/>
        )
    }

    buildDriverCardsFromDatabase() {
        let data = this.state.data;
        let cards = [];
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                cards.push(Rides.newDriverCard(data[key].name, data[key].seats));
            }
        }
        return cards;
    }

    render() {
        return (
            <div className="driver-container">
                {this.buildDriverCardsFromDatabase()}
            </div>
        );
    }
}

export default Rides;
