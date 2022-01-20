/*
 Copyright (c) 2021 Sylvanus Etim <iamprincesly@gmail.com>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.
 */
'use strict';

var helpers = require('./libs/helpers');
var Erroran = require('./libs/erroran');

module.exports = { Erroran, ErroranHandler };

/**
 * This is the main Erroran error handler middleware.
 * Pass it to express app as the last middleware
 *
 * @param {*} [options={}]
 * @return {function} (err, req, res, next)
 */
function ErroranHandler(options = {}) {
    if (!process.env.NODE_ENV) {
        process.env.NODE_ENV = 'development';
    }

    // Set default programming error message in production
    var ProgrammingErrorMsg =
        options.ProgrammingErrorMsg || 'Something went wrong, please try again';

    return (err, req, res, next) => {
        if (process.env.NODE_ENV === 'production') {
            var error = { ...err };

            var errorMessage;

            error.ProgrammingErrorMsg = ProgrammingErrorMsg;
            error.message = err.message;

            /**
             * Throw programming error in production.
             * Catches 'SyntaxError', 'Error', 'RangeError', 'URIError',
             * 'AggregateError', 'InternalError', 'EvalError', 'TypeError',
             * 'ReferenceError', and 'ErroranInvalidArgument' error names at the moment.
             * Looking forward to add more in the future as I discovered them.
             */
            if (
                err.name === 'SyntaxError' ||
                err.name === 'Error' ||
                err.name === 'RangeError' ||
                err.name === 'URIError' ||
                err.name === 'AggregateError' ||
                err.name === 'InternalError' ||
                err.name === 'EvalError' ||
                err.name === 'TypeError' ||
                err.name === 'ReferenceError' || 
                err.name === 'ErroranInvalidArgument'
            ) {
                error = helpers.programmingError(ProgrammingErrorMsg);
            }

            /**
             * Throw CastErrorMsg in production
             */
            if (err.name === 'CastError') {
                errorMessage = options.CastErrorMsg;
                error = helpers.CastError(err, errorMessage);
            }

            /**
             * Throw MongoDBDuplicateKeyErrorMsg in production
             */
            if (err.code === 11000) {
                errorMessage = options.MongoDBDuplicateKeyErrorMsg;
                error = helpers.MongoDBDuplicateFieldsError(err, errorMessage);
            }

            /**
             * Throw ValidationErrorMsg in production
             */
            if (err.name === 'ValidationError') {
                errorMessage = options.ValidationErrorMsg;
                error = helpers.ValidationError(err, errorMessage);
            }

            /**
             * Throw JsonWebTokenErrorMsg in production
             */
            if (err.name === 'JsonWebTokenError') {
                errorMessage = options.JsonWebTokenErrorMsg;
                error = helpers.JWTMalfunctionError(errorMessage);
            }

            /**
             * Throw JsonTokenExpiredErrorMsg in production
             */
            if (err.name === 'TokenExpiredError') {
                errorMessage = options.JsonTokenExpiredErrorMsg;
                error = helpers.JWTExpiredError(errorMessage);
            }

            helpers.handleProdError(error, req, res);
        } else {
            helpers.handleDevError(err, req, res);
        }
    };
}
