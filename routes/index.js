module.exports = function(database) {
    var express = require('express');
    var router = express.Router();

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

    router.post('/tokensignin', (req, res) => {
        //TODO: Verify ID token
    });
database.ref('rides/' + 'galuu').set({
    name: 'Garrett Luu',
    location: {lat: 100, long: 100},
//             destination: req.destination
});

    router.post('/newride', (req, res) => {
        console.log("post request");
        database.ref('rides/' + req.body.userId).set({
            name: req.body.name,
            location: req.body.location,
            destination: req.body.destination
        });
        res.send('Received POST');
    });


    return router;
};

