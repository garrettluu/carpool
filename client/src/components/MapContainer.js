import React, { Component } from 'react';
import Map from './Map.js'

class MapContainer extends Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        };
        return(
            <div>
                <Map google={this.props.google} />
            </div>
        )
    }
}

export default GoogleApiComponent({
    apiKey: "AIzaSyBqwQCpkCG0Eiesift3wJiypcfgAMFiXz0"
})(MapContainer)
