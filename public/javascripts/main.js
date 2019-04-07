var map;
var destinationMarker;

var dest;

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
        navigator.geolocation.getCurrentPosition((position => {
            var loc = new Location(position.coords.latitude, position.coords.longitude);
            updateMap(loc)
        }))
    }
}

function getLocationForRide() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var loc = new Location(position.coords.latitude, position.coords.longitude);
            newRide(loc, dest);
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
    xhr.open('POST', 'https://localhost:3000/tokensignin');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);
}

function newRide(location, destination) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", '/newride', true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
        "userId": "twonder",
        "name": "Tracker Wonderdog",
        "location": location,
        "destination": destination
    }));
}
