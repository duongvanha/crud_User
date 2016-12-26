let jwt = require('jsonwebtoken');
class TokenGenerator {
    constructor(key) {
        this.key     = key;
        this.options = {expiresIn: 60 * 60 * 60};
    }

    setOptions(options) {
        this.options = options;
    }

    generate(value) {
        return jwt.sign(value, this.key, this.options);
    }

    verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.key, (err, encode) => {
                if (err) return reject(err);
                resolve(encode);
            })
        });
    }
}

module.exports = TokenGenerator;