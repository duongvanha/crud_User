const ObjectID = require('mongodb').ObjectID;
class User {
    markFromMongo(stringId) {
        this._id = new ObjectID(stringId);
        return this;
    }

    set userName(val) {
        this._userName = val;
    }

    get userName() {
        return this._userName;
    }

    get id() {
        return this._id;
    }

    set idCredential(val) {
        this._idCredential = val;
    }

    get idCredential() {
        return this._idCredential;
    }

    set id(val) {
        this._id = val;
    }


    set email(newEmail) {
        this._email = newEmail;
        return this;
    }

    get email() {
        return this._email;
    }

    toJson() {
        return {
            userName    : this.userName,
            email       : this.email,
            idCredential: this.idCredential
        }
    }
}

module.exports = User;