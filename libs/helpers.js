/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Copyright (c) 2021 Sylvanus Etim
 * @license MIT Licensed
 */

'use strict';

var Erroran = require('./erroran');

var helpers = {};

/**
 * Handle programming in production
 * and return it to Erroran class
 *
 * At the moment this handle 'SyntaxError', 'Error', 'RangeError', 'URIError',
 * 'AggregateError', 'InternalError', 'EvalError', 'TypeError',
 * 'ReferenceError', and 'ErroranInvalidArgument' error names
 * looking forward to add more in future as I discovered them
 *
 * @param {string} msg
 * @return {object} Erroran
 * @memberof helpers
 */
helpers.programmingError = (msg) => {
    return new Erroran(msg, 500, '', false);
};

/**
 * Handle MongDB 'CastError' in production and return it
 * to Erroran class
 *
 * @param {object} err
 * @param {string} msg
 * @return {object} Erroran
 * @memberof helpers
 */
helpers.CastError = (err, msg) => {
    var message = msg || `Invalid ${err.path}: ${err.value}.`;
    return new Erroran(message, 400);
};

/**
 * Handle MongDB '11000' Duplicate Key Error in production
 * and return it to Erroran class
 *
 * @param {object} err
 * @param {string} msg
 * @return {object} Erroran
 * @memberof helpers
 */
helpers.MongoDBDuplicateFieldsError = (err, msg) => {
    var value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0].trim('"');
    var message =
        msg || `Duplicate field value: ${value}. Please use another value`;
    return new Erroran(message, 400);
};

/**
 * Handle MongDB 'ValidationError' Error in production
 * and return it to Erroran class
 *
 * @param {object} err
 * @param {string} msg
 * @return {object} Erroran
 * @memberof helpers
 */
helpers.ValidationError = (err, msg) => {
    var errors = Object.values(err.errors).map((el) => el.message);
    var message = msg || `Invalid input data: ${errors.join('. ')}.`;
    return new Erroran(message, 400);
};

/**
 * Handle JWT 'JsonWebTokenError' Error in production
 * and return it to Erroran class
 *
 * @param {string} msg
 * @return {object} Erroran
 * @memberof helpers
 */
helpers.JWTMalfunctionError = (msg) => {
    var message = msg || 'Invalid token! Please generate token again.';
    return new Erroran(message, 401);
};

/**
 * Handle JWT 'TokenExpiredError' Error in production
 * and return it to Erroran class
 *
 * @param {string} msg
 * @return {object} Erroran
 * @memberof helpers
 */
helpers.JWTExpiredError = (msg) => {
    var message = msg || 'Token has expired! Please generate token again';
    return new Erroran(message, 401);
};

/**
 * Handle all errors in development environment
 * and return full error stack in json response
 *
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @return {object} res
 * @memberof helpers
 */
helpers.handleDevError = (err, req, res) => {
    return res.status(err.statusCode || 500).json({
        status: err.status,
        message: err.message,
        name: err.name,
        stack: err.stack,
    });
};

/**
 * Handle all errors in production environment
 * and return only error status and message in json response
 *
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @return {object} res
 * @memberof helpers
 */
helpers.handleProdError = (err, req, res) => {
    if (err.isOperational) {
        return res.status(err.statusCode || 500).json({
            status: err.status,
            message: err.message,
        });
    }

    return res.status(500).json({
        status: err.status,
        message: err.proErrorMsg || err.message,
    });
};

// Export the module
module.exports = helpers;