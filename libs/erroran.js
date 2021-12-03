'use strict';

/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Erroran Copyright(c) 2021
 * @license MIT Licensed
 */
const BaseError = require('./base');

/**
 * Do not instantial this class directly
 * just call the static methods on the class
 * @class Erroran
 */
class Erroran {
    static OK = 200;
    static BAD_REQUEST = 400;
    static NOT_FOUND = 404;
    static NOT_AUTHENTICATED = 401;
    static FORBIDDEN = 403;
    static INTERNAL_SERVER = 500;

    /**
     * This will automatically send 404 status code 
     * and your desire message to the client
     * @static
     * @param {*} message
     * @param {*} [statusCode=this.NOT_FOUND]
     * @param {string} [description='Not Found.']
     * @param {boolean} [isOperational=true]
     * @return {*} 
     * @memberof Erroran
     */
    static notFound(
        message,
        statusCode = this.NOT_FOUND,
        description = 'Not Found.',
        isOperational = true
    ) {
        if (!message) throw new Error('Please enter error message');

        return new BaseError(message, statusCode, description, isOperational);
    }

    /**
     * This will automatically send 400 status code 
     * and your desire message to the client
     * @static
     * @param {*} message
     * @param {*} [statusCode=this.BAD_REQUEST]
     * @param {string} [description='Bad Request.']
     * @param {boolean} [isOperational=true]
     * @return {*} 
     * @memberof Erroran
     */
    static badRequest(
        message,
        statusCode = this.BAD_REQUEST,
        description = 'Bad Request.',
        isOperational = true
    ) {
        if (!message) throw new Error('Please enter error message');

        return new BaseError(message, statusCode, description, isOperational);
    }

    /**
     * This will automatically send 401 status code 
     * and your desire message to the client
     * @static
     * @param {*} message
     * @param {*} [statusCode=this.NOT_AUTHENTICATED]
     * @param {string} [description='Not Authorized.']
     * @param {boolean} [isOperational=true]
     * @return {*} 
     * @memberof Erroran
     */
    static notAuthenticated(
        message,
        statusCode = this.NOT_AUTHENTICATED,
        description = 'Not Authorized.',
        isOperational = true
    ) {
        if (!message) throw new Error('Please enter error message');

        return new BaseError(message, statusCode, description, isOperational);
    }

    /**
     * This will automatically send 403 status code 
     * and your desire message to the client
     *
     * @static
     * @param {*} message
     * @param {*} [statusCode=this.FORBIDDEN]
     * @param {string} [description='Forbidden.']
     * @param {boolean} [isOperational=true]
     * @return {*} 
     * @memberof Erroran
     */
    static forbidden(
        message,
        statusCode = this.FORBIDDEN,
        description = 'Forbidden.',
        isOperational = true
    ) {
        if (!message) throw new Error('Please enter error message');

        return new BaseError(message, statusCode, description, isOperational);
    }

    /**
     * This will automatically send 500 status code 
     * and your desire message to the client
     *
     * @static
     * @param {*} message
     * @param {*} [statusCode=this.INTERNAL_SERVER]
     * @param {string} [description='Internal Server Error.']
     * @param {boolean} [isOperational=true]
     * @return {*} 
     * @memberof Erroran
     */
    static internalServer(
        message,
        statusCode = this.INTERNAL_SERVER,
        description = 'Internal Server Error.',
        isOperational = true
    ) {
        if (!message) throw new Error('Please enter error message');

        return new BaseError(message, statusCode, description, isOperational);
    }

    /**
     * Call this middleware as your last middleware 
     * in your server script.
     *
     * @static
     * @param {*} err
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @memberof Erroran
     */
    static handler = (err, req, res, next) => {
        if (process.env.NODE_ENV === 'production') {
            return res.status(err.statusCode).json({
                status: err.status,
                description: err.description,
                message: err.message,
            });
        }

        return res.status(err.statusCode).json({
            status: err.status,
            description: err.description,
            message: err.message,
            stack: err.stack,
        });
    };
}

module.exports = Erroran;
