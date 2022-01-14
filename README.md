# Erroran

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/iamprincesly/erroran/Release?style=flat-square) ![NPM](https://img.shields.io/npm/l/erroran?style=flat-square) ![npm](https://img.shields.io/npm/v/erroran?style=flat-square) ![npm](https://img.shields.io/npm/dm/erroran?style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/iamprincesly/erroran?style=flat-square) ![Twitter Follow](https://img.shields.io/twitter/follow/iamprincesly?style=flat-square)

A simple error handling middleware made for [Express](http://expressjs.com/) app. It can be used for throwing operational error in JSON response to the client. Erroran also catch all programming errors in production and throw friendly/desired error message to client.

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Simple Usage](#simple-usage)
    -   [More Options](#more-options)
-   [Configuration](#configuration)
-   [Programming Errors](#programming-errors)
-   [Coming Soon](#coming-soon)
-   [License](#license)
-   [Author](#author)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install erroran
```

## Usage

### Simple Usage

Using the Erroran class to return operational error

```javascript
var express = require('express');
var { Erroran, ErroranHandler } = require('erroran');
var app = express();

app.get('/products/:id', function (req, res, next) {
    return next(
        new Erroran('You are not logged in! Please log in to get access', 401)
    );
});

// Make sure this is always your last middleware
app.use(ErroranHandler());

app.listen(5000, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port 5000`);
});
```

Alternatively, you can throw operational error like this

```javascript
var express = require('express');
var { Erroran, ErroranHandler } = require('erroran');
var app = express();

app.get('/products/:id', function (req, res, next) {
    throw new Erroran(
        'You are not logged in! Please log in to get access',
        401
    );
});

// Make sure this is always your last middleware
app.use(ErroranHandler());

app.listen(5000, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port 5000`);
});
```
Sample response
```json
{
    "status": "failed",
    "message": "You are not logged in! Please log in to get access"
}
```

NOTE: If you are throwing Erroran in async/await function make sure you catch the error object in ```catch()``` block and pass it to the ```next()``` function like below.

```javascript
var express = require('express');
var { Erroran, ErroranHandler } = require('erroran');
var app = express();

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

// Make sure this is always your last middleware
app.use(ErroranHandler());

app.listen(5000, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port 5000`);
});
```

If you throw Erroran in a `then()` chain you can as well catch the error in `catch()` block and pass it to the `next()` function like below.

```javascript
User.findById(req.params.id)
    .then((user) => {
        if (user.role !== 'admin') {
            throw new Erroran('You don\'t have permission to access this route', 403);
        }
    })
    .catch((err) => {
        next(err);
    });
```

### More Options

Erroran gives more options for throwing operational errors without instantiating the Erroran class. You can throw any of the Erroran static methods below with or without ```string``` as an argument.

```javascript
var { Erroran } = require('erroran');

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
```
You can pass your desire error message to any of the Erroran static methods as an argument, example below.

```javascript
var { Erroran } = require('erroran');

throw Erroran.notAuthenticated('Please login to access this resource');
```
Alternatively, you can return it to the ```next() ```function

```javascript
var express = require('express');
var { Erroran } = require('erroran');

var app = express();

app.get('/products/:id', function (req, res, next) {
    return next(Erroran.notAuthenticated('Please login to access this resource'));
});
```

## Configuration

Erroran has support for MongoDB, JWT and programming error. It catches MongoDB `'CastError'`, `'ValidationError'` and duplicate key `'11000'` error and also catches JWT `'JsonWebTokenError'` and `'TokenExpiredError'` in production.

You can configure Erroran by passing an object as an argument to the middleware like below.

```javascript
var express = require('express');
var { Erroran, ErroranHandler } = require('erroran');
var app = express();

var prodErrMsg = {
    ProgrammingErrorMsg: 'My programming errors in production', // When other programming error occur in production
    CastErrorMsg: 'My MongoDB cast error message in production', // MongoDB CastError
    MongoDBDuplicateKeyErrorMsg: 'My MongoDB duplicate key error message in production', // MongoDB DuplicateKeyError 11000
    ValidationErrorMsg: 'My validation error message in production', // MongoDB ValidationError
    JsonWebTokenErrorMsg: 'My Json Web token error message in production', // JWT JsonWebTokenError
    JsonTokenExpiredErrorMsg: 'My Json Web token Expiring error message in production', // TokenExpiredError
};

// Make sure this is always your last middleware
app.use(ErroranHandler(prodErrMsg));

app.listen(5000, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port 5000`);
});
```

Erroran has default messages to throw whenever MongoDB, JWT or programming error occur in production.

### Programming errors

For any programming error, Erroran will send full error stack and error message in development with 500 status code while sending `'Something went wrong, please try again later'` or whatever error message you define in `'ProgrammingErrorMsg'` with 500 status code in production.

All errors are sent in JSON response.

## Coming soon

-   Erroran will be able to send error and data to view
-   Erroran will be able to log all programming errors that occur in production into a log file

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Sylvanus Etim](https://github.com/iamprincesly) ([iamprincesly@gmail.com](mailto:iamprincesly@gmail.com))
