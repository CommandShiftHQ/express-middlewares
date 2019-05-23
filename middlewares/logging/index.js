const logging = (request, response, next) => {
    console.log(`${request.method} ${request.originalUrl}`);
    return next();
};

module.exports = logging;