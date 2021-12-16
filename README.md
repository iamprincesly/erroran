# Erroran

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/iamprincesly/erroran/Release?style=flat-square) ![NPM](https://img.shields.io/npm/l/erroran?style=flat-square) ![npm](https://img.shields.io/npm/v/erroran?style=flat-square) ![npm](https://img.shields.io/npm/dm/erroran?style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/iamprincesly/erroran?style=flat-square) ![Twitter Follow](https://img.shields.io/twitter/follow/iamprincesly?style=flat-square)

Erroran is a node.js package for providing error handling middleware in [Express](http://expressjs.com/) app. It can be used for throwing operational error in JSON response to the client.

* [Installation](#installation)
* [Usage](#usage)
* [Options](#options)
* [License](#license)
* [Author](#author)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install erroran
```

## Usage

```javascript
var express = require('express');
var Erroran = require('erroran');
var app = express();

// Make sure this is always your last middleware
app.use(Erroran.handler);

const PORT = 5000;

const server = app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
```

### Using Erroran to send operational error to client

```javascript
var express = require('express');
var Erroran = require('erroran');
var app = express();

app.get('/products/:id', cors(), function (req, res, next) {
    return next(
        Erroran.notAuthenticated('You are not logged in! Please log in to get access')
    );
})

// Make sure this is always your last middleware
app.use(Erroran.handler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
```

## Options
### Send 404 Not Found Error
This will automatically send 404 status code and your desire message to the client
```javascript
var Erroran = require('erroran');

Erroran.notFound('Resrouce not found');
```

### Send 400 Bad Request Error
This will automatically send 400 status code and your desire message to the client
```javascript
var Erroran = require('erroran');

Erroran.badRequest('Please provide a valid email');
```

### Send 401 Not Authenticated Error
This will automatically send 401 status code and your desire message to the client
```javascript
var Erroran = require('erroran');

Erroran.notAuthenticated('Please login to access this resource');
```

### Send 403 Forbidden Error
This will automatically send 403 status code and your desire message to the client
```javascript
var Erroran = require('erroran');

Erroran.forbidden('You are not permitted to access this resource');
```

### Send 500 Internal Server Error
This will automatically send 500 status code and your desire message to the client
```javascript
var Erroran = require('erroran');

Erroran.internalServer('Oh no, something went wrong');
```

### Other programming errors
For other programming errors, Erroran will send full error stack and error message in development with 500 status code while sending 'Something went wrong, please try again later' error message with 500 status code in production.

All errors are sent in JSON response.

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Sylvanus Etim](https://github.com/iamprincesly) ([iamprincesly@gmail.com](mailto:iamprincesly@gmail.com))