let User       = require('./../../app/userService/User');
module.exports = (req, res, next) => {
    let token = req.headers.token || req.query;
    req.app.get('Authenticator').authenticate(token).then(tokenUser => {
        let user      = new User();
        user.userName = tokenUser.userName;
        user.id       = tokenUser.id;
        req.user      = user;
        next();
    }).catch(err => next(new Error("Token not valid")));
};