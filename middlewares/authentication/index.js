const authorization = (request, response, next) => {
    if(request.body.secret === 'letmein') {
        return next();
    }

    response.status(401).send("Invalid secret provided.");
}

module.exports = authorization;