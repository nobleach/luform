var Sequelize = require('sequelize');
var config = require('./main');

// Database connection
var sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPass,
    config.dbInfo
);

module.exports = sequelize;
