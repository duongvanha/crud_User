const User     = require('./../../app/userService/User');
module.exports = (req, res, next) => {
    req.body.user = new User();
    if (req.body.userName) req.body.user.UserName = req.body.userName;
    if (req.body.password) req.body.user.Password = req.body.password;
    if (req.body.email) req.body.user.Email = req.body.email;
    next();
};