import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const style = {
            width: '100%',
            height: '100%'
        };
        return(
            <div style={style}>
                <Map google={this.props.google} />
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBqwQCpkCG0Eiesift3wJiypcfgAMFiXz0")
})(MapContainer)
