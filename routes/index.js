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

    router.get('/login', (req, res, next) => {
        res.render('login', {});
    });

    router.post('/tokensignin', (req, res) => {
        //TODO: Verify ID token
    });

    router.post('/newride', (req, res) => {
        database.ref('rides/' + req.userId).set({
            name: req.name,
            location: req.location,
            // destination: req.destination
        });
    });


    return router;
};

