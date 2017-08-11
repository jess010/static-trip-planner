const Sequelize = require('sequelize');
const db = require('./db');

const Hotel = db.define('hotel', {
    name: {
        type: Sequelize.TEXT,
    },
    num_stars: {
        type: Sequelize.STRING,
    },
    amenities: {
        type: Sequelize.STRING,
    }
})

module.exports = Hotel;
