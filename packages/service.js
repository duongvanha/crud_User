/**
 * Created by friendd on 21/12/2016.
 */
const BcryptHasher    = require('./../app/encryptionService/BcryptHasher');
const TokenGenerator  = require('./../app/encryptionService/TokenGenerator');
const Authenticator   = require('./../app/authenService/Authenticator');
const RegisterService = require('./../app/registerService/RegisterService');
const Credential      = require('./../app/credentialService/Credential');
module.exports        = (app) => {
    let userProvider       = app.get('userRepository');
    let credentialProvider = app.get('credentialRepository');
    let bcryptHasher       = new BcryptHasher();
    let tokenGenerator     = new TokenGenerator(app.get('config').keyJwt);
    app.set('Authenticator', new Authenticator(credentialProvider, bcryptHasher, tokenGenerator));
    app.set('RegisterService', new RegisterService(credentialProvider, userProvider, bcryptHasher));
    return app;
};