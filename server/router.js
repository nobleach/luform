const AuthenticationController = require('./controllers/authentication');
const express = require('express');
const passportService = require('./config/passport');
const passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', {session: false});
const requireLogin = passport.authenticate('local', {session: false});

// Constants for role types
const REQUIRE_ADMIN = "Admin";
const REQUIRE_OWNER = "Owner";
const REQUIRE_CLIENT = "Client";
const REQUIRE_MEMBER = "Member";

module.exports = function(app) {
    // Initializing route groups
    const apiRoutes = express.Router();
    const authRoutes = express.Router();

    //=========================
    // Auth Routes
    //=========================

    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);

    // Registration route
    authRoutes.post('/register', AuthenticationController.register);

    // Login route
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    // Set url for API group routes
    app.use('/api', apiRoutes);

    // Test protected route
    apiRoutes.get('/protected', requireAuth, function(req, res) {
        res.send({ content: 'The protected test route is functional!'});
    });
};
