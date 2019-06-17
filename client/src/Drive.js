import React, {Component} from 'react';
import MapContainer from './components/MapContainer.js';

class Drive extends Component {

  render() {
    return(
      <div className="Drive">
          <MapContainer/>

        <p> Destination: </p>
        <input type="text" id="dest"/>
        <button onclick="searchPlace()">Search</button>

        <p> Available Seats: </p>
        <input type="number" id="seats-num"/>
        <button onclick="getLocationForRide()">New Ride</button>
      </div>
    );
  }
}

export default Drive;

