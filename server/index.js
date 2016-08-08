const express = require('express');
const app = express();
const logger = require('morgan');
const config = require('./config/main');

// Start the server
const server = app.listen(config.port);
console.log('🌎 - Your server is running on port ' + config.port + '.');
