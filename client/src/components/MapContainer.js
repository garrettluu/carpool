import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const style = {
            height: '500px',
            width: '100%'
        };
        return(
            <div style={style}>
                <Map google={this.props.google}
                     style={style}/>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBqwQCpkCG0Eiesift3wJiypcfgAMFiXz0")
})(MapContainer)
