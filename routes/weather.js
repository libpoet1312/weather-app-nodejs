var express = require('express');
var router = express.Router();
const geocode = require('../utils/geocode.js');
const forecast = require('../utils/forecast.js');

//JSON endpoint for queries
router.get('/', (req, res, next) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a search address'
        });
    }

    geocode (req.query.address, (error, {long, lat, location} = {}) => {
        if(error) {
            return res.send({error})
        }
        forecast(long,lat, (error, forecastData) =>{
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
});


module.exports = router;

