"use strict";

const config = require('../config/main');
const User = require('../models').user;

exports.show = function(req, res, next) {
    res.json(req);
}
