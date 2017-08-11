var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurant')
var Hotel = require('../models/hotel')
var Activity = require('../models/activity')

// Retrieve data from restaurants
//const rdPromise = Restaurant.findAll({})

// Retrieve data from activities

// Retrieve data from hotels

router.get('/', function (req, res, next) {
    console.log("Here is the container!")
    //Render the index.html with the r, a h data.
    var outerScopeContainer = {};
    Hotel.findAll()
    .then(function (dbHotels) {
        outerScopeContainer.dbHotels = dbHotels;
        return Restaurant.findAll();
    })
    .then(function (dbRestaurants) {
        outerScopeContainer.dbRestaurants = dbRestaurants;
        return Activity.findAll();
    })
    .then(function (dbActivities) {
        console.log("Here is the container!")
        console.log(outerScopeContainer)
        //res.send("Promise chain works!")
        res.render('home', {
            templateHotels: outerScopeContainer.dbHotels,
            templateRestaurants: outerScopeContainer.dbRestaurants,
            templateActivities: dbActivities
        });
    })
    .catch(next);
})

module.exports = router;
