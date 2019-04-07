module.exports = function(database, io) {
    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Carpool: Rideshare Redefined' });
    });

    router.get('/rides', function(req, res, next) {
        res.render('rides', {  });
    });

    router.get('/login', (req, res, next) => {
        res.render('login', {});
    });

    io.on('connection', (socket) => {
        socket.on('newRide', (msg) => {
            database.ref('rides/' + msg.userId).set({
                name: msg.name,
                location: msg.location,
                destination: msg.destination
            });
        });
    });
    // router.post('/rides', (req, res) => {
    //   database.ref('rides/' + req.userId).set({
    //     name: req.name,
    //     location: req.location,
    //     destination: req.destination
    //   });
    // });

    return router;
};

