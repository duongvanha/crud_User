/**
 * Created by friendd on 16/12/2016.
 */
const User     = require('./../userService/User');
const ObjectID = require('mongodb').ObjectID;
class Credential {

    constructor(userName, password) {
        this._userName = userName;
        this._password = password;
    }

    get userName() {
        return this._userName;
    }

    set userName(userName) {
        this._userName = userName;
    }

    get id() {
        return this._id;
    }

    set id(val) {
        this._id = val
    }

    markFromMongo(stringId) {
        this.id = new ObjectID(stringId);
        return this;
    }

    set password(newPassword) {
        this._password = newPassword;
        return this;
    }

    get password() {
        return this._password;
    }

    toSearchJson() {
        return {userName: this._userName};
    }

    toJson() {
        return {
            id      : this.id,
            userName: this.userName
        }
    }
}

module.exports = Credential;