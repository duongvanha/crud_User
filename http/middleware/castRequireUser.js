/**
 * Created by friendd on 21/12/2016.
 */
let User       = require('./../../app/userService/User');
let validator  = require('validator');
module.exports = (req, res, next) => {
    if (!req.body.userName) next(new Error("userName not null"));
    if (!req.body.password) next(new Error("password not null"));
    req.body.user          = new User();
    req.body.user.UserName = req.body.userName;
    req.body.user.Password = req.body.password;
    if (req.body.email) {
        if (!validator.isEmail(req.body.email)) return next(new Error("Email not validate"));
        req.body.user.Email = req.body.email;
    }
    next();
};