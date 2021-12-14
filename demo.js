 /**
  * Erroran
  * @author Sylvanus Etim <iamprincesly@gmail.com>
  * @copyright Erroran Copyright(c) 2021
  * @desc Demo project to demonstrate how erroran middleware work
  * @license MIT Licensed
  */
 const express = require('express');
 const Erroran = require('erroran');
 
 const app = express();
 
 app.get('/test', (req, res, next) => {
    return next(Erroran.internalServerErrorP('This is my own error.'));
 });
 
 app.use(Erroran.errorHandler);
 
 const PORT = 3000;

 app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
 });