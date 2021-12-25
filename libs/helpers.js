/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Erroran Copyright(c) 2021
 * @license MIT Licensed
 */

'use strict';

var Erroran = require('./erroran');

var helpers = {};

helpers.CastError = (err, msg) => {
    var message = msg || `Invalid ${err.path}: ${err.value}.`;
    return new Erroran(message, 400);
};

helpers.MongoDBDuplicateFieldsError = (err, msg) => {
    var value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0].trim('"');
    var message = msg || `Duplicate field value: ${value}. Please use another value`;
    return new Erroran(message, 400);
};

helpers.ValidationError = (err, msg) => {
    var errors = Object.values(err.errors).map((el) => el.message);
    var message = msg || `Invalid input data: ${errors.join('. ')}.`;
    return new Erroran(message, 400);
};

helpers.JWTMalfunctionError = (msg) => {
    var message = msg || 'Invalid token! Please generate token again.';
    return new Erroran(message, 401);
};

helpers.JWTExpiredError = (msg) => {
    var message = msg || 'Token has expired! Please generate token again';
    return new Erroran(message, 401);
};

helpers.handleDevError = (err, req, res) => {
    return res.status(err.statusCode || 500).json({
        status: err.status,
        message: err.message,
        name: err.name,
        path: err.path,
        errors: err.errors,
        stack: err.stack,
    });
};

helpers.handleProdError = (err, req, res) => {
    if (err.isOperational) {
        return res.status(err.statusCode || 500).json({
            status: err.status,
            message: err.message,
        });
    }

    return res.status(500).json({
        status: err.status,
        message: err.ProgrammingErrorMsg,
    });
};

// Export the module
module.exports = helpers;
