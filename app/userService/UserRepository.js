/**
 * Created by friendd on 16/12/2016.
 */
let User     = require('./User');
let ObjectId = require('mongodb').ObjectId;
class UserRepository {

    constructor(collection) {
        this.collection = collection;

    }

    getAll() {
        return this.collection.find({}).toArray().then((rawUsers) => {
            return rawUsers.map((rawUser) => {
                let user      = new User();
                user.userName = rawUser.userName;
                user.markFromMongo(rawUser._id);
                return user;
            })
        });
    }

    findById(id) {
        return this.collection.findOne({_id: ObjectId(id)}).then((rawUser) => {
            if (!rawUser) return null;
            let user      = new User();
            user.userName = rawUser.userName;
            user.markFromMongo(rawUser._id);
            return user;
        });
    }

    findByCredential(credential) {
        return this.collection.findOne({idCredential: ObjectId(credential.id)}).then((rawUser) => {
            if (!rawUser) return null;
            let user      = new User();
            user.userName = rawUser.userName;
            user.markFromMongo(rawUser._id);
            return user;
        });
    }

    findByUserName(name) {
        return this.collection.findOne({userName: name}).then((rawUser) => {
            if (!rawUser) return null;
            let user      = new User();
            user.userName = rawUser.userName;
            user.markFromMongo(rawUser._id);
            return user;
        })
    }

    addUser(user) {
        return this.collection.insertOne(user.toJson()).then((result) => {
            return user.markFromMongo(result.ops[0]._id);
        });
    }

    editUser(user) {
        return this.collection.updateOne({_id: user.id}, {$set: user.toJson()}).then((result) => {
            if (!result.modifiedCount) throw new Error("Không tìm thấy user");
            return user;
        });
    }

    removeUser(id) {
        return this.collection.deleteOne({_id: ObjectId(id)}).then((result) => {
            if (!result.deletedCount) throw new Error("Không tìm thấy user id: " + id);
            return true;
        });
    }
}

module.exports = UserRepository;