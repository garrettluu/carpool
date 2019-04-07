var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rides', function(req, res, next) {
  res.render('rides', { title: 'Express' });
});
module.exports = router;
