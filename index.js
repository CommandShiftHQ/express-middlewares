const express = require('express');
const postProfileController = require('./controllers/profile/postProfile');
const getOffersController = require('./controllers/offer/getOffers');
const authorization = require('./middlewares/authentication');
const parameterCheck = require('./middlewares/parameterCheck');
const logging = require('./middlewares/logging');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logging); // custom middleware we have created for this demo 

const profileMiddlewares = [parameterCheck, authorization];

app.post('/profile', profileMiddlewares, postProfileController);
app.get('/offers', getOffersController);

app.listen(3000);