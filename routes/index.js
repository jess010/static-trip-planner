var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurant')
var Hotel = require('../models/hotel')
var Activity = require('../models/activity')

router.get('/', function (req, res, next) {
    const rdPromise = Restaurant.findAll();
    const hdPromise = Hotel.findAll();
    const adPromise = Activity.findAll();

    Promise.all([rdPromise, hdPromise, adPromise])
    .then(function (dataArr) {
        res.render('index', {
            templateHotels: dataArr[1],
            templateRestaurants: dataArr[0],
            templateActivities: dataArr[2]
        });
    })
})

module.exports = router;
