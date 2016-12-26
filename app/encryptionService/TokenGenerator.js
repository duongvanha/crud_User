/**
 * Created by friendd on 16/12/2016.
 */
let jwt = require('jsonwebtoken');
class TokenGenerator {
    constructor(key) {
        this.key     = key;
        this.options = {expiresIn: 60 * 60};
    }

    setOptions(options) {
        this.options = options;
    }

    generate(value) {
        return jwt.sign(value, this.key, this.options);
    }
}

module.exports = TokenGenerator;