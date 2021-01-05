const express = require('express');

// Import controller functions (these are always the last piece of middleware)
const postProfileController = require('./controllers/postProfile');
const getOffersController = require('./controllers/getOffers');

// Import custom middleware functions 
const authorization = require('./middlewares/authentication');
const parameterCheck = require('./middlewares/validation');
const logging = require('./middlewares/logging');

const app = express();

// Examples of application level middleware
app.use(express.json()); // express middleware for parsing application/json
app.use(express.urlencoded({ extended: true })); // express middleware for parsing application/x-www-form-urlencoded
app.use(logging); // custom middleware we have created for this demo 

const profileMiddlewares = [parameterCheck, authorization];

// Examples of route level middleware
app.post('/profile', profileMiddlewares, postProfileController);
app.get('/offers', getOffersController);

app.listen(3000);