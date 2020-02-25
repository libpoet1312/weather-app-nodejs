var express = require('express');
var router = express.Router();
const geocode = require('../utils/geocode.js');
const forecast = require('../utils/forecast.js');

/* GET home page. */
router.get('/', (req, res, next) => {
   res.render('index', {
      name: 'Nick Pappas'
   });
});


module.exports = router;
