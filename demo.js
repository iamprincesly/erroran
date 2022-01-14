/**
 * Erroran
 * @author Sylvanus Etim <iamprincesly@gmail.com>
 * @copyright Copyright (c) 2021 Sylvanus Etim
 * @license MIT Licensed
 */

'use strict';

var express = require('express');
var { Erroran, ErroranHandler } = require('erroran');
var app = express();

// Returning Erroran to next() function
app.get('/returning/products/:id', function (req, res, next) {
   return next(
       new Erroran('You are not logged in! Please log in to get access', 401)
   );
});

// Throwing Erroran
app.get('/throwing/products/:id', function (req, res, next) {
    throw new Erroran(
        'You are not logged in! Please log in to get access',
        401
    );
});

// In async/await function
app.get('/users/:id', async function (req, res, next) {
   try {
       var user = await User.findById(req.params.id);

       if (!user) {
           throw new Erroran('There is no user with that id', 404);
       }
   } catch (err) {
       next(err);
   }
});

// In then() chaining 
app.get('/then/users/:id', function (req, res, next) {
   User.findById(req.params.id)
    .then((user) => {
        if (user.role !== 'admin') {
            throw new Erroran('You don\'t have permission to access this route', 403);
        }
    })
    .catch((err) => {
        next(err);
    });
});

/**
 * You can use any of the below Erroran static methods
 * to throw an error to save the stress of passing status code as an argument
 */
Erroran.badRequest(); // 400 status code
Erroran.notAuthenticated(); // 401 status code
Erroran.paymentRequired(); // 402 status code
Erroran.forbidden(); // 403 status code
Erroran.notFound(); // 404 status code
Erroran.unsupportedHTTPMethod(); // 405 status code
Erroran.notAcceptable(); // 406 status code
Erroran.proxyAuthenticationRequired(); // 407 status code
Erroran.requestTimeout(); // 408 status code
Erroran.conflict(); // 409 status code
Erroran.gone(); // 410 status code
Erroran.lengthRequired(); // 411 status code
Erroran.preconditionFailed(); // 412 status code
Erroran.requestEntityTooLarge(); // 413 status code
Erroran.requestURITooLong(); // 414 status code
Erroran.unsupportedMediaType(); // 415 status code
Erroran.requestedRangeNotSatisfiable(); // 416 status code
Erroran.expectationFailed(); // 417 status code;
Erroran.internalServerError(); // 500 status code
Erroran.notImplemented(); // 501 status code
Erroran.badGateway(); // 502 status code
Erroran.serviceUnavailable(); // 503 status code
Erroran.gatewayTimout(); // 504 status code
Erroran.unsupportedHTTPVersion(); // 505 status code

/**
 * Can pass your desire error message as an argument
 * any of the above Erroran static methods like below.
 */
throw Erroran.notAuthenticated('Please login to access this resource');

// Alternatively, you return it to the next function as well
app.get('/returning/products/:id', function (req, res, next) {
   return next(Erroran.notAuthenticated('Please login to access this resource'));
});

/**
 * You can config it like below
 */
var prodErrMsg = {
   ProgrammingErrorMsg: 'My programming errors in production', // When other programming error occur in production
   CastErrorMsg: 'My MongoDB cast error message in production', // MongoDB CastError
   MongoDBDuplicateKeyErrorMsg: 'My MongoDB duplicate key error message in production', // MongoDB DuplicateKeyError 11000
   ValidationErrorMsg: 'My validation error message in production', // MongoDB ValidationError
   JsonWebTokenErrorMsg: 'My Json Web token error message in production', // JWT JsonWebTokenError
   JsonTokenExpiredErrorMsg: 'My Json Web token Expiring error message in production', // TokenExpiredError
};

// Make sure this is always your last middleware
app.use(ErroranHandler(prodErrMsg)); // with configuration
app.use(ErroranHandler()); // without configuration

app.listen(5000, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port 5000`);
});
