/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Copyright (c) 2021 Sylvanus Etim
 * @license MIT Licensed
 */

'use strict';

/**
 * Main class
 *
 * @class Erroran
 * @extends {Error}
 */
module.exports = class Erroran extends Error {
    static BAD_REQUEST = 400;
    static NOT_AUTHENTICATED = 401;
    static PAYMENT_REQUIRED  = 402;
    static FORBIDDEN = 403;
    static NOT_FOUND = 404;
    static UNSUPPORTED_METHOD = 405;
    static NOT_ACCEPTABLE = 406;
    static PROXY_AUTHENTICATION_REQUIRED = 407;
    static REQUEST_TIMEOUT = 408;
    static CONFLICT = 409;
    static GONE = 410;
    static LENGTH_REQUIRED = 411;
    static PRECONDITION_FAILED = 412;
    static REQUEST_ENTITY_TOO_LARGE = 413;
    static REQUEST_URI_TOO_LONG = 414;
    static UNSUPPORTED_MEDIA_TYPE = 415;
    static REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    static EXPECTATION_FAILED = 417;
    static INTERNAL_SERVER_ERROR = 500;
    static NOT_IMPLEMENTED = 501;
    static BAD_GATEWAY = 502;
    static SERVICE_UNAVAILABLE = 503;
    static GATEWAY_TIMEOUT = 504;
    static UNSUPPORTED_HTTP_VERSION = 505;

    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error';
        this.isOperational = true;
    }

    /**
     * This will automatically send '400' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Bad Request]
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static badRequest(message = 'Bad Request') {
        throw new Erroran(message, this.BAD_REQUEST);
    }

    /**
     * This will automatically send '401' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Not authenticated']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static notAuthenticated(message = 'Not authenticated') {
        throw new Erroran(message, this.NOT_AUTHENTICATED);
    }

    /**
     * This will automatically send '402' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Payment Required']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static paymentRequired(message = 'Payment Required') {
        throw new Erroran(message, this.PAYMENT_REQUIRED);
    }

    /**
     * This will automatically send '403' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Forbidden']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static forbidden(message = 'Forbidden') {
        throw new Erroran(message, this.FORBIDDEN);
    }

    /**
     * This will automatically send '404' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Not Found]
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static notFound(message = 'Not Found') {
        throw new Erroran(message, this.NOT_FOUND);
    }

    /**
     * This will automatically send '405' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='HTTP Method Not Allowed']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static unsupportedHTTPMethod(message = 'HTTP Method Not Allowed') {
        throw new Erroran(message, this.UNSUPPORTED_METHOD);
    }

    /**
     * This will automatically send '406' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Not Acceptable']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static notAcceptable(message = 'Not Acceptable') {
        throw new Erroran(message, this.NOT_ACCEPTABLE);
    }

    /**
     * This will automatically send '407' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Proxy Authentication Required']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static proxyAuthenticationRequired(message = 'Proxy Authentication Required') {
        throw new Erroran(message, this.PROXY_AUTHENTICATION_REQUIRED);
    }

    /**
     * This will automatically send '408' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Request Timeout']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static requestTimeout(message = 'Request Timeout') {
        throw new Erroran(message, this.REQUEST_TIMEOUT);
    }

    /**
     * This will automatically send '409' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Conflict']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static conflict(message = 'Conflict') {
        throw new Erroran(message, this.CONFLICT);
    }

    /**
     * This will automatically send '410' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Gone']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static gone(message = 'Gone') {
        throw new Erroran(message, this.GONE);
    }

    /**
     * This will automatically send '411' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Length Required']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static lengthRequired(message = 'Length Required') {
        throw new Erroran(message, this.LENGTH_REQUIRED);
    }

    /**
     * This will automatically send '412' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Precondition Failed']
     * @throw {object} Erroran
     * @memberof Erroran
     */
     static preconditionFailed(message = 'Precondition Failed') {
        throw new Erroran(message, this.PRECONDITION_FAILED);
    }

    /**
     * This will automatically send '413' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Request Entity Too Large']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static requestEntityTooLarge(message = 'Request Entity Too Large') {
        throw new Erroran(message, this.REQUEST_ENTITY_TOO_LARGE);
    }

    /**
     * This will automatically send '414' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Request-URI Too Long']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static requestURITooLong(message = 'Request-URI Too Long') {
        throw new Erroran(message, this.REQUEST_URI_TOO_LONG);
    }

    /**
     * This will automatically send '415' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Unsupported Media Type']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static unsupportedMediaType(message = 'Unsupported Media Type') {
        throw new Erroran(message, this.UNSUPPORTED_MEDIA_TYPE);
    }

    /**
     * This will automatically send '416' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Requested Range Not Satisfiable']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static requestedRangeNotSatisfiable(message = 'Requested Range Not Satisfiable') {
        throw new Erroran(message, this.REQUESTED_RANGE_NOT_SATISFIABLE);
    }

    /**
     * This will automatically send '417' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Expectation Failed']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static expectationFailed(message = 'Expectation Failed') {
        throw new Erroran(message, this.EXPECTATION_FAILED);
    }

    /**
     * This will automatically send '500' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Internal Server Error']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static internalServerError(message = 'Internal Server Error') {
        throw new Erroran(message, this.INTERNAL_SERVER_ERROR);
    }

    /**
     * This will automatically send '501' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Not Implemented']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static notImplemented(message = 'Not Implemented') {
        throw new Erroran(message, this.NOT_IMPLEMENTED);
    }

    /**
     * This will automatically send '502' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Bad Gateway']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static badGateway(message = 'Bad Gateway') {
        throw new Erroran(message, this.BAD_GATEWAY);
    }

    /**
     * This will automatically send '503' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Service Unavailable']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static serviceUnavailable(message = 'Service Unavailable') {
        throw new Erroran(message, this.SERVICE_UNAVAILABLE);
    }

    /**
     * This will automatically send '504' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Gateway Timeout']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static gatewayTimout(message = 'Gateway Timeout') {
        throw new Erroran(message, this.GATEWAY_TIMEOUT);
    }

    /**
     * This will automatically send '505' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='HTTP Version Not Supported']
     * @throw {object} Erroran
     * @memberof Erroran
     */
    static unsupportedHTTPVersion(message = 'HTTP Version Not Supported') {
        throw new Erroran(message, this.UNSUPPORTED_HTTP_VERSION);
    }
};