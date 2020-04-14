var express = require('express');
var router = express.Router();
var patient = require('./patients');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
