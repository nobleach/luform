const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config/main');
const router = require('./router');  ;

// Start the server
const server = app.listen(config.port);
console.log('🌎 - Your server is running on port ' + config.port + '.');

// Set static file location for production
app.use(express.static(__dirname + '/public'));

// Config middleware
app.use(bodyParser.urlencoded({extended: false}));
debugger;
app.use(bodyParser.json());
app.use(logger('dev')); // Log requests to API using morga// Enable CORS from client-side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Feed the app to the router
router(app);
