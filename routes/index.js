module.exports = function(database) {
    var express = require('express');
    var router = express.Router();

    var ridesRef = database.ref('rides/');

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Carpool: Rideshare Redefined' });
    });

    router.get('/rides', function(req, res, next) {
        res.render('rides', {  });
    });

    router.get('/drive', (req, res) => {
        res.render('drive', {});
    });

    router.get('/carpool', function(req, res, next) {
        res.render('carpool', {  });
    });

    router.get('/login', (req, res, next) => {
        res.render('login', {});
    });

    router.get('/update', (req, res) => {
        database.ref('rides/').on('value', (snapshot) => {
            console.log(snapshot.val());
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(snapshot.val()));
            // for (driver in snapshot.val()) {
            //     console.log(driver.valueOf());
            // }
        });
    });

    router.post('/tokensignin', (req, res) => {
        //TODO: Verify ID token
    });
// database.ref('rides/' + 'galuu').set({
//     name: 'Garrett Luu',
//     location: {lat: 100, long: 100},
//             destination: req.destination
// });

    router.post('/newride', (req, res) => {
        console.log("post request");
        database.ref('rides/' + req.body.userId).set({
            name: req.body.name,
            location: req.body.location,
            destination: req.body.destination,
            seats: req.body.seats
        });
        res.send('Received POST');
    });


    return router;
};

