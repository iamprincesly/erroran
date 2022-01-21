/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Copyright (c) 2021 Sylvanus Etim
 * @license MIT Licensed
 */

'use strict';

var helpers = require('./helpers');

/**
 * Export error middleware.
 */
module.exports = ErroranHandler;

/**
 * This is the main Erroran error handling middleware.
 * Pass it to express app as the last middleware
 *
 * @param {*} [options]
 * @return {function} (err, req, res, next)
 */
function ErroranHandler(options) {
    var opts = options || {};

    var appEnv = process.env.NODE_ENV || 'development';

    // Set default programming error message in production
    var proErrorMsg = opts.ProgrammingErrorMsg || 'Something went wrong, please try again';

    return function errorMiddleware(err, req, res, next) {
        if (appEnv === 'production') {
            var error = { ...err };

            var errorMessage;

            error.proErrorMsg = proErrorMsg;
            error.message = err.message;

            /**
             * Throw programming error in production.
             * Catches 'Error', 'SyntaxError', 'RangeError', 'URIError',
             * 'AggregateError', 'InternalError', 'EvalError', 'TypeError',
             * 'ReferenceError', and 'ErroranInvalidArgument' error names at the moment.
             * Looking forward to add more in the future as I discovered them.
             */
            var proErorrNames = [
                'Error',
                'SyntaxError',
                'RangeError',
                'URIError',
                'AggregateError',
                'InternalError',
                'EvalError',
                'TypeError',
                'ReferenceError',
                'ErroranInvalidArgument',
            ];

            if (proErorrNames.includes(err.name)) {
                error = helpers.programmingError(proErrorMsg);
            }

            /**
             * Throw CastErrorMsg in production
             */
            if (err.name === 'CastError') {
                errorMessage = opts.CastErrorMsg;
                error = helpers.CastError(err, errorMessage);
            }

            /**
             * Throw MongoDBDuplicateKeyErrorMsg in production
             */
            if (err.code === 11000) {
                errorMessage = opts.MongoDBDuplicateKeyErrorMsg;
                error = helpers.MongoDBDuplicateFieldsError(err, errorMessage);
            }

            /**
             * Throw ValidationErrorMsg in production
             */
            if (err.name === 'ValidationError') {
                errorMessage = opts.ValidationErrorMsg;
                error = helpers.ValidationError(err, errorMessage);
            }

            /**
             * Throw JsonWebTokenErrorMsg in production
             */
            if (err.name === 'JsonWebTokenError') {
                errorMessage = opts.JsonWebTokenErrorMsg;
                error = helpers.JWTMalfunctionError(errorMessage);
            }

            /**
             * Throw JsonTokenExpiredErrorMsg in production
             */
            if (err.name === 'TokenExpiredError') {
                errorMessage = opts.JsonTokenExpiredErrorMsg;
                error = helpers.JWTExpiredError(errorMessage);
            }

            helpers.handleProdError(error, req, res);
        } else {
            helpers.handleDevError(err, req, res);
        }
    };
}
