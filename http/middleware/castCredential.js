/**
 * Created by friendd on 21/12/2016.
 */
let Credential = require('./../../app/credentialService/Credential');
module.exports = (req, res, next) => {
    if (!req.body.userName) next(new Error("userName is required"));
    if (!req.body.password) next(new Error("password is required"));
    req.body.credential = new Credential(req.body.userName, req.body.password);
    next();
};