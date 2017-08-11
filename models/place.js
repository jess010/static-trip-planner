const Sequelize = require('sequelize');
const db = require('./db');

const Place = db.define('place', {
    address: {
        type: Sequelize.TEXT,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.TEXT,
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
})

module.exports = Place;
