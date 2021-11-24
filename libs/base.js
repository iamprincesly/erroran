'use strict';

/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Erroran Copyright(c) 2021
 * @license MIT Licensed
 */
class BaseError extends Error {
    constructor(message, statusCode, description, isOperational) {
        super(message);

        this.statusCode = statusCode;
        this.description = description;
        this.isOperational = isOperational;

        this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error';

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = BaseError;
