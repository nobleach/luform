const passport = require('passport');
const User = require('../models').user;
const config = require('./main');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };

// Setting up local login strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    User.findOne({where: {email: email}}).then(function(user) {
        // console.log(user.dataValues);
        if(!user.dataValues) {
            return done(null, false, { error: 'Your login details could not be verified. Please try again.' });
        }

        var isMatch = user.comparePassword(password);
        if (!isMatch) {
            return done(null, false, { error: "Your login details could not be verified. Please try again." });
        }

        return done(null, user.dataValues);
    });
});

const jwtOptions = {
    // Telling Passport to check authorization headers for JWT
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    // Telling Passport where to find the secret
    secretOrKey: config.secret
};

// Setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload._id, function(err, user) {
        if (err) {
            return done(err, false);
        }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);
