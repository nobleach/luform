"use strict";

const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const config = require('../config/main');
const User = require('../models').user;

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

// Set user info from request
function setUserInfo(request) {
    return {
        id: request.id,
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email
    };
}

//========================================
// Login Route
//========================================
exports.login = function(req, res, next) {

    let userInfo = setUserInfo(req.user);

    res.status(200).json({
        token: 'JWT ' + generateToken(userInfo),
        user: userInfo
    });
}


//========================================
// Registration Route
//========================================
exports.register = function(req, res, next) {
    // Check for registration errors
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    // Return error if no email provided
    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.'});
    }

    // Return error if full name not provided
    if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.'});
    }

    // Return error if no password provided
    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({where: {email: email}}).then(function(existingUser) {
        // If user is not unique, return error
        if (existingUser) {
            return res.status(422).send({ error: 'That email address is already in use.' });
        }

        // If email is unique and password was provided, create account
        User
            .build({
                id: User.generateId(),
                email: email,
                password: User.generateHash(password),
                firstName: firstName,
                lastName: lastName
            })
            .save()
            .then(function(user) {
                // Respond with JWT if user was created
                let userInfo = setUserInfo(user);

                res.status(201).json({
                    token: 'JWT ' + generateToken(userInfo),
                    user: userInfo
                });
            }).catch(function(err) {
                // handle error
            });
    });
}

//========================================
// Authorization Middleware
//========================================

// Role authorization check
exports.roleAuthorization = function(role) {
    return function(req, res, next) {
        const user = req.user;

        User.findById(user.id).then(function(foundUser) {
            // if (err) {
            //     res.status(422).json({ error: 'No user was found.' });
            //     return next(err);
            // }

            // If user is found, check role.
            if (foundUser.role === role) {
                return next();
            }

            res.status(401).json({ error: 'You are not authorized to view this content.' });
            return next('Unauthorized');
        });
    }
}
