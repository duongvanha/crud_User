const User = require('./../userService/User');
class RegisterService {
    constructor(credentialRepository, userRepository, hasher) {
        this.credentialRepository = credentialRepository;
        this.hasher               = hasher;
        this.userRepository       = userRepository;
    }

    register(credential) {
        return this.hasher.hash(credential.password)
            .then(password => {
                credential.password = password;
                return this.credentialRepository.addCredential(credential);
            })
            .then(newCredential => {
                let user          = new User();
                user.userName     = newCredential.userName;
                user.idCredential = newCredential.id;
                return this.userRepository.addUser(user);
            })
    }
}

module.exports = RegisterService;