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
    static PAYMENT_REQUIRED = 402;
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

    constructor(message, statusCode = 500, name, operational = true) {
        super(message);
        this.name = name || this.constructor.name;
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error';
        this.isOperational = operational ? true : false;
    }

    static #_invalidArgument(method) {
        throw new this(
            'Invalid arugment passed to: ' + method + '() static method',
            500,
            'ErroranInvalidArgument', false
        );
    }

    /**
     * Automatically send '400' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Bad Request]
     * @throw {object} this
     * @memberof Erroran
     */
    static badRequest(message = 'Bad Request') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('badRequest');
        }

        throw new this(message, this.BAD_REQUEST);
    }

    /**
     * Automatically send '401' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Not authenticated']
     * @throw {object} this
     * @memberof Erroran
     */
    static notAuthenticated(message = 'Not authenticated') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('notAuthenticated');
        }

        throw new this(message, this.NOT_AUTHENTICATED);
    }

    /**
     * Automatically send '402' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Payment Required']
     * @throw {object} this
     * @memberof Erroran
     */
    static paymentRequired(message = 'Payment Required') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('paymentRequired');
        }

        throw new this(message, this.PAYMENT_REQUIRED);
    }

    /**
     * Automatically send '403' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Forbidden']
     * @throw {object} this
     * @memberof Erroran
     */
    static forbidden(message = 'Forbidden') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('forbidden');
        }

        throw new this(message, this.FORBIDDEN);
    }

    /**
     * Automatically send '404' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Not Found]
     * @throw {object} this
     * @memberof Erroran
     */
    static notFound(message = 'Not Found') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('notFound');
        }

        throw new this(message, this.NOT_FOUND);
    }

    /**
     * Automatically send '405' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='HTTP Method Not Allowed']
     * @throw {object} this
     * @memberof Erroran
     */
    static unsupportedHTTPMethod(message = 'HTTP Method Not Allowed') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('unsupportedHTTPMethod');
        }

        throw new this(message, this.UNSUPPORTED_METHOD);
    }

    /**
     * Automatically send '406' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Not Acceptable']
     * @throw {object} this
     * @memberof Erroran
     */
    static notAcceptable(message = 'Not Acceptable') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('notAcceptable');
        }

        throw new this(message, this.NOT_ACCEPTABLE);
    }

    /**
     * Automatically send '407' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Proxy Authentication Required']
     * @throw {object} this
     * @memberof Erroran
     */
    static proxyAuthenticationRequired(
        message = 'Proxy Authentication Required'
    ) {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('proxyAuthenticationRequired');
        }

        throw new this(message, this.PROXY_AUTHENTICATION_REQUIRED);
    }

    /**
     * Automatically send '408' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Request Timeout']
     * @throw {object} this
     * @memberof Erroran
     */
    static requestTimeout(message = 'Request Timeout') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('requestTimeout');
        }

        throw new this(message, this.REQUEST_TIMEOUT);
    }

    /**
     * Automatically send '409' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Conflict']
     * @throw {object} this
     * @memberof Erroran
     */
    static conflict(message = 'Conflict') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('conflict');
        }

        throw new this(message, this.CONFLICT);
    }

    /**
     * Automatically send '410' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Gone']
     * @throw {object} this
     * @memberof Erroran
     */
    static gone(message = 'Gone') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('gone');
        }

        throw new this(message, this.GONE);
    }

    /**
     * Automatically send '411' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Length Required']
     * @throw {object} this
     * @memberof Erroran
     */
    static lengthRequired(message = 'Length Required') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('lengthRequired');
        }

        throw new this(message, this.LENGTH_REQUIRED);
    }

    /**
     * Automatically send '412' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Precondition Failed']
     * @throw {object} this
     * @memberof Erroran
     */
    static preconditionFailed(message = 'Precondition Failed') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('preconditionFailed');
        }

        throw new this(message, this.PRECONDITION_FAILED);
    }

    /**
     * Automatically send '413' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Request Entity Too Large']
     * @throw {object} this
     * @memberof Erroran
     */
    static requestEntityTooLarge(message = 'Request Entity Too Large') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('requestEntityTooLarge');
        }

        throw new this(message, this.REQUEST_ENTITY_TOO_LARGE);
    }

    /**
     * Automatically send '414' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Request-URI Too Long']
     * @throw {object} this
     * @memberof Erroran
     */
    static requestURITooLong(message = 'Request-URI Too Long') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('requestURITooLong');
        }

        throw new this(message, this.REQUEST_URI_TOO_LONG);
    }

    /**
     * Automatically send '415' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Unsupported Media Type']
     * @throw {object} this
     * @memberof Erroran
     */
    static unsupportedMediaType(message = 'Unsupported Media Type') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('unsupportedMediaType');
        }

        throw new this(message, this.UNSUPPORTED_MEDIA_TYPE);
    }

    /**
     * Automatically send '416' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Requested Range Not Satisfiable']
     * @throw {object} this
     * @memberof Erroran
     */
    static requestedRangeNotSatisfiable(
        message = 'Requested Range Not Satisfiable'
    ) {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('requestedRangeNotSatisfiable');
        }

        throw new this(message, this.REQUESTED_RANGE_NOT_SATISFIABLE);
    }

    /**
     * Automatically send '417' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Expectation Failed']
     * @throw {object} this
     * @memberof Erroran
     */
    static expectationFailed(message = 'Expectation Failed') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('expectationFailed');
        }

        throw new this(message, this.EXPECTATION_FAILED);
    }

    /**
     * Automatically send '500' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Internal Server Error']
     * @throw {object} this
     * @memberof Erroran
     */
    static internalServerError(message = 'Internal Server Error') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('internalServerError');
        }

        throw new this(message, this.INTERNAL_SERVER_ERROR);
    }

    /**
     * Automatically send '501' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Not Implemented']
     * @throw {object} this
     * @memberof Erroran
     */
    static notImplemented(message = 'Not Implemented') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('notImplemented');
        }

        throw new this(message, this.NOT_IMPLEMENTED);
    }

    /**
     * Automatically send '502' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Bad Gateway']
     * @throw {object} this
     * @memberof Erroran
     */
    static badGateway(message = 'Bad Gateway') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('badGateway');
        }

        throw new this(message, this.BAD_GATEWAY);
    }

    /**
     * Automatically send '503' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Service Unavailable']
     * @throw {object} this
     * @memberof Erroran
     */
    static serviceUnavailable(message = 'Service Unavailable') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('serviceUnavailable');
        }

        throw new this(message, this.SERVICE_UNAVAILABLE);
    }

    /**
     * Automatically send '504' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='Gateway Timeout']
     * @throw {object} this
     * @memberof Erroran
     */
    static gatewayTimout(message = 'Gateway Timeout') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('gatewayTimout');
        }

        throw new this(message, this.GATEWAY_TIMEOUT);
    }

    /**
     * Automatically send '505' status code
     * and your desire message to the client
     * @static
     * @param {string} [message='HTTP Version Not Supported']
     * @throw {object} this
     * @memberof Erroran
     */
    static unsupportedHTTPVersion(message = 'HTTP Version Not Supported') {
        if (typeof message !== 'string') {
            return this.#_invalidArgument('unsupportedHTTPVersion');
        }

        throw new this(message, this.UNSUPPORTED_HTTP_VERSION);
    }
};
