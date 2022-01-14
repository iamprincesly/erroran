/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Copyright (c) 2021 Sylvanus Etim
 * @license MIT Licensed
 */
var { Erroran } = require('../index');

describe('Erroran', () => {
    // Test for bad request
    it('Should throw bad request error', () => {
        expect(() => {
            Erroran.badRequest('This is an error from bad request');
        }).toThrow();
    });

    // Test for unauthenticated
    it('Should throw unauthentication error', () => {
        expect(() => {
            Erroran.notAuthenticated('This is an unauthentication erorr');
        }).toThrow();
    });

    // Test for payment required
    it('Should throw payment required error', () => {
        expect(() => {
            Erroran.paymentRequired('This is payment required erorr');
        }).toThrow();
    });

    // Test for forbidden error
    it('Should throw forbiden error', () => {
        expect(() => {
            Erroran.forbidden('This is forbidden erorr');
        }).toThrow();
    });

    // Test for not found error
    it('Should throw not found error', () => {
        expect(() => {
            Erroran.notFound('This is not found erorr');
        }).toThrow();
    });

    // Test for unsupported HTTP method error
    it('Should throw unsupported HTTP method error', () => {
        expect(() => {
            Erroran.unsupportedHTTPMethod(
                'This is unsupported HTTP method erorr'
            );
        }).toThrow();
    });

    // Test for not acceptable error
    it('Should throw not acceptable error', () => {
        expect(() => {
            Erroran.notAcceptable('This is not acceptable erorr');
        }).toThrow();
    });

    // Test for proxy authentication required error
    it('Should throw proxy authentication required error', () => {
        expect(() => {
            Erroran.proxyAuthenticationRequired(
                'This is proxy authentication required erorr'
            );
        }).toThrow();
    });

    // Test for request timeout error
    it('Should throw request timeout error', () => {
        expect(() => {
            Erroran.requestTimeout('This is request timeout erorr');
        }).toThrow();
    });

    // Test for conflict error
    it('Should throw conflict error', () => {
        expect(() => {
            Erroran.conflict('This is conflict erorr');
        }).toThrow();
    });

    // Test for gone error
    it('Should throw gone error', () => {
        expect(() => {
            Erroran.gone('This is gone erorr');
        }).toThrow();
    });

    // Test for length required error
    it('Should throw length required error', () => {
        expect(() => {
            Erroran.lengthRequired('This is length required erorr');
        }).toThrow();
    });

    // Test for precondition failed error
    it('Should throw precondition failed error', () => {
        expect(() => {
            Erroran.preconditionFailed('This is precondition failed erorr');
        }).toThrow();
    });

    // Test for request entity too large error
    it('Should throw request entity too large error', () => {
        expect(() => {
            Erroran.requestEntityTooLarge(
                'This is request entity too large erorr'
            );
        }).toThrow();
    });

    // Test for request URI too long error
    it('Should throw request URI too long error', () => {
        expect(() => {
            Erroran.requestURITooLong('This is request URI too long erorr');
        }).toThrow();
    });

    // Test for unsupported media type error
    it('Should throw unsupported media type error', () => {
        expect(() => {
            Erroran.unsupportedMediaType(
                'This is unsupported media type erorr'
            );
        }).toThrow();
    });

    // Test for requested range not satisfiable error
    it('Should throw requested range not satisfiable error', () => {
        expect(() => {
            Erroran.requestedRangeNotSatisfiable(
                'This is requested range not satisfiable erorr'
            );
        }).toThrow();
    });

    // Test for expectation failed error
    it('Should throw expectation failed error', () => {
        expect(() => {
            Erroran.expectationFailed('This is expectation failed erorr');
        }).toThrow();
    });

    // Test for internal server error
    it('Should throw internal server error', () => {
        expect(() => {
            Erroran.internalServerError('This is internal server erorr');
        }).toThrow();
    });

    // Test for not implemented error
    it('Should throw not implemented error', () => {
        expect(() => {
            Erroran.notImplemented('This is not implemented erorr');
        }).toThrow();
    });

    // Test for bad gateway error
    it('Should throw bad gateway error', () => {
        expect(() => {
            Erroran.badGateway('This is bad gateway erorr');
        }).toThrow();
    });

    // Test for service unavailable error
    it('Should throw service unavailable error', () => {
        expect(() => {
            Erroran.serviceUnavailable('This is service unavailable erorr');
        }).toThrow();
    });

    // Test for gateway timeout error
    it('Should throw gateway timeout error', () => {
        expect(() => {
            Erroran.gatewayTimout('This is gateway timeout erorr');
        }).toThrow();
    });

    // Test for unsupported HTTP version error
    it('Should throw unsupported HTTP version error', () => {
        expect(() => {
            Erroran.unsupportedHTTPVersion(
                'This is unsupported HTTP version erorr'
            );
        }).toThrow();
    });
});
