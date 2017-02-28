const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config/main');
const router = require('./router');  ;
const cors = require('cors');

// Start the server
const server = app.listen(config.port);
console.log('🌎 - Your server is running on port ' + config.port + '.');

// Set static file location for production
app.use(express.static(__dirname + '/public'));

// Config middleware
app.use(bodyParser.urlencoded({extended: false}));
debugger;
app.use(bodyParser.json());
app.use(logger('dev')); // Log requests to API using morga
// Enable CORS from client-side
app.use(cors());

// Feed the app to the router
router(app);
