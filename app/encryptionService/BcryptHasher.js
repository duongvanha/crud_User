/**
 * Created by friendd on 21/12/2016.
 */
let bcrypt = require('bcrypt');
class BcryptHasher {
    constructor() {
        this._saltRounds = 10;
    }

    compare(pass, hash) {
        return bcrypt.compare(pass, hash);
    }

    hash(pass) {
        return bcrypt.hash(pass, this._saltRounds).then(data => {
            return data;
        });
    }

    set saltRounds(saltRounds) {
        this._saltRounds = saltRounds;
    }

    get saltRounds() {
        return this._saltRounds;
    }

}
module.exports = BcryptHasher;