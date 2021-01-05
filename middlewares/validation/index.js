const parameterCheck = (request, response, next) => {
    const requestKeys = Object.keys(request.body);
    const requiredKeys = ['secret', 'username'];
    const validRequest = requiredKeys.every(k => requestKeys.includes(k));

    if(validRequest) {
        return next();
    }

    response.status(401).send("Invalid keys. username and secret is required");
}

module.exports = parameterCheck;