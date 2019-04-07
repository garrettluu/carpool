var config = {
    apiKey: "AIzaSyBxvyLamhcTZczjtobRuYFIE6RahuIV-mg",
    authDomain: "carpool-1554591126344.firebaseapp.com",
    databaseURL: "https://carpool-1554591126344.firebaseio.com",
    projectId: "carpool-1554591126344",
    storageBucket: "carpool-1554591126344.appspot.com",
    messagingSenderId: "769999411158"
};

firebase.initializeApp(config);

let database = firebase.database();

function Location(lat, long) {
    this.lat = lat;
    this.long = long;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var loc = new Location(position.coords.latitude, position.coords.longitude);
            database.ref('rides/' + "bleung").set({
                name: "Brian Leung",
                location: loc,
            });
        })
    } else {
        // Geolocation not supported
        // TODO: show message to user
        console.log("Geolocation not available");
    }
}

getLocation();
