"use strict";

const config = require('../config/main');
const User = require('../models').user;
const Pilgrim = require('../models/pilgriminfo').pilgriminfo;

exports.show = function(req, res, next) {
    let userId = req.params.userId;
    User.findOne({where: {id:userId}}).then(function(user) {
        let userRole = user.dataValues.role;
        switch (userRole) {
            case 'pilgrim':
                res.json({res: 'pilgrimdata'});
                break;
            case 'sponsor':
                break;
            case 'pastor':
                break;
            case 'registar':
                break;

            default:
        }
    });
}
