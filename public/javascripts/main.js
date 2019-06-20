var map;
var destinationMarker;

var dest;

function mobile() {
    var x = document.getElementById("title-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 14
    });

    getLocationForMap();
}

function updateMap(location) {
     map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: location.lat, lng: location.long},
        zoom: 14
    });

    var marker = new google.maps.Marker({
        position: {lat: location.lat, lng: location.long},
        map: map,
        title: 'Current Location'
    });
}

function searchPlace() {
    var query = document.getElementById('dest').value;
    var request = {
        query: query,
        fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
            dest = new Location(results[0].geometry.location.lat(), results[0].geometry.location.lng());
            console.log(dest);
        }
    });
}
function createMarker(place) {
    destinationMarker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(destinationMarker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

function Location(lat, long) {
    this.lat = lat;
    this.long = long;
}

function getLocationForMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var loc = new Location(position.coords.latitude, position.coords.longitude);
            updateMap(loc)
        })
    }
}

function getLocationForRide() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var loc = new Location(position.coords.latitude, position.coords.longitude);
            var seats = document.getElementById('seats-num').value;
            newRide(loc, dest, seats);
        })
    } else {
        // Geolocation not supported
        // TODO: show message to user
        console.log("Geolocation not available");
    }
}

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/tokensignin', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);
}

function newRide(location, destination, seats) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", '/newride', true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
        "userId": "galuu",
        "name": "Garrett Luu",
        "location": location,
        "destination": destination,
        "seats": seats
    }));
}

function refreshRides() {
    console.log("Refreshed");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // Typical action to be performed when the document is ready:
            console.log(xmlhttp.responseText);
            removeDriverDiv();
            let jsonObj = JSON.parse(xmlhttp.responseText);
            //loop through each element in the json object
            for (let key in jsonObj) {
                //Check if the key exists in json
                if (jsonObj.hasOwnProperty(key)) {
                    let driver = jsonObj[key];
                    //build a div for each driver
                    buildDriverDiv(driver.name, driver.seats)
                }
            }
        }
    };
    //Send GET request to update
    xmlhttp.open("GET", '/update', true);
    xmlhttp.send();
}

function buildDriverDiv(name, seats) {
    //Create outer div
    let outerDiv = document.createElement('div');
    outerDiv.className = 'driver';
    //Append to container
    document.getElementById('driver-container').appendChild(outerDiv);

    //Name of driver
    let nameText = document.createElement('p');
    nameText.classList.add('driver-name');
    nameText.innerText = name;
    outerDiv.appendChild(nameText);

    //Seats left
    let seatsText = document.createElement('p');
    seatsText.classList.add('driver-seats');
    seatsText.innerText = "Remaining Seats: " + seats;
    outerDiv.appendChild(seatsText);

    let reserveButton = document.createElement('button');
    reserveButton.classList.add('material-button');
    reserveButton.innerText = "Reserve";
    outerDiv.appendChild(reserveButton);

}

function removeDriverDiv() {
  var removeVar = document.getElementById("driver-container");
  while (removeVar.firstChild) {
    removeVar.removeChild(removeVar.firstChild);
  }
}
// function removeDriverDiv() {
//   var removeVar = document.getElementsByClassName('drivers');
//   var i;
//   for (i = 0; i < removeVar.length; i++) {
//     removeVar[i].parentNode.removeChild(removeVar[i]);
//   }
// }
