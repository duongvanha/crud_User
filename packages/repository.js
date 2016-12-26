/**
 * Created by friendd on 19/12/2016.
 */
let UserRepository       = require('./../app/userService/UserRepository');
let RegisterService      = require('./../app/registerService/RegisterService');
let CredentialRepository = require('./../app/credentialService/CredentialRepository');
module.exports           = (app) => {
    app.set('userRepository', new UserRepository(app.get('Collection').collection('Users')));
    app.set('credentialRepository', new CredentialRepository(app.get('Collection').collection('credential')));
    return app;
};