module.exports = function(database) {
    //Express routing
    let express = require('express');
    let router = express.Router();

    //Google sign-in authorization
    const {OAuth2Client} = require('google-auth-library');

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
        res.setHeader('Content-Type', 'application/json');
        database.ref('rides/').on('value', (snapshot) => {
            res.send(snapshot.val());
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
