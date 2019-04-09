module.exports = function(database) {
    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', (req, res) => {
        res.render('index', { title: 'Carpool: Rideshare Redefined' });
    });

    router.get('/rides', (req, res) => {
        res.render('rides', {});
    });

    router.get('/drive', (req, res) => {
        res.render('drive', {});
    });

    router.get('/carpool', (req, res) => {
        res.render('carpool', {});
    });

    router.get('/login', (req, res) => {
        res.render('login', {});
    });

    router.get('/update', (req, res) => {
        database.ref('rides/').on('value', (snapshot) => {
            console.log(snapshot.val());
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(snapshot.val()));
        });
    });

    router.post('/tokensignin', (req, res) => {
        //TODO: Verify ID token
    });

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

