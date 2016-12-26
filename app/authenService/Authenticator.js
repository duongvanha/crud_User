class Authenticator {
    constructor(credentialRepository, hasher, tokenGenerator) {
        this.hasher               = hasher;
        this.tokenGenerator       = tokenGenerator;
        this.credentialRepository = credentialRepository;
    }

    login(credential) {
        return this.credentialRepository
            .findByUserName(credential.userName)
            .then(credentialDB => {
                if (!credentialDB) throw new Error("Account does not exist");
                return this.hasher.compare(credential.password, credentialDB.password);
            })
            .then((isLogin) => {
                if (!isLogin) throw new Error("Password not validate");
                return this.tokenGenerator.generate(credential.toJson())
            });
    }

    authenticate(token) {
        return this.tokenGenerator.verify(token);
    }
}

module.exports = Authenticator;