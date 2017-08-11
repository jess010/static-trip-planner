const db = require('./db');
const Place = require('./place');
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;

// const Place = db.define('place', {
//     address: {
//         type: Sequelize.TEXT,
//     },
//     city: {
//         type: Sequelize.STRING,
//     },
//     state: {
//         type: Sequelize.STRING,
//     },
//     phone: {
//         type: Sequelize.TEXT,
//     },
//     location: {
//         type: Sequelize.ARRAY(Sequelize.FLOAT)
//     }
// })

// const Hotel = db.define('hotel', {
//     name: {
//         type: Sequelize.TEXT,
//     },
//     num_stars: {
//         type: Sequelize.STRING,
//     },
//     amenities: {
//         type: Sequelize.STRING,
//     }
// })

// const Activity = db.define('activity', {
//     name: {
//         type: Sequelize.TEXT,
//     },
//     age_range: {
//         type: Sequelize.STRING,
//     },
// })

// const Restaurant = db.define('restaurant', {
//     name: {
//         type: Sequelize.TEXT,
//     },
//     cuisine: {
//         type: Sequelize.ARRAY(Sequelize.STRING),
//     },
//     price: {
//         type: Sequelize.INTEGER,
//     },
// })

// const Assosciation = db.define('association', {
//     place_name: {
//         type: Sequelize.TEXT
