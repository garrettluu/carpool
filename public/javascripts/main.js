// initialize firebase
let config = {
    apiKey: "aizasybxvylamhctzczjtobruyfie6rahuiv-mg",
    authDomain: "carpool-1554591126344.firebaseapp.com",
    databaseURL: "https://carpool-1554591126344.firebaseio.com",
    projectId: "carpool-1554591126344",
    storageBucket: "carpool-1554591126344.appspot.com",
    messagingSenderId: "769999411158"
};

firebase.initializeApp(config);

//Get reference to data
let database = firebase.database();

function Location(lat, long) {
    this.lat = lat;
    this.long = long;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            var loc = new Location(position.coords.latitude, position.coords.longitude);
            newRide("galuu", "Garrett Luu", loc);
        })
    } else {
        // Geolocation not supported
        // TODO: show message to user
        console.log("Geolocation not available");
    }
}

function newRide(user, name, location) {
    database.ref('rides/' + user).set({
        name: name,
        location: location
    });
}

getLocation();
