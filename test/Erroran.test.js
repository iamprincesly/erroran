/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Copyright (c) 2021 Sylvanus Etim
 * @license MIT Licensed
 */
var Erroran = require('../libs/Erroran');

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
});
