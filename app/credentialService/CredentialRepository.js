/**
 * Created by friendd on 23/12/2016.
 */
const Credential = require('./Credential');
let ObjectId     = require('mongodb').ObjectId;
class CredentialRepository {

    constructor(collection) {
        this.collection = collection;
    }

    addCredential(credential) {
        return this.collection.insertOne(credential.toJson()).then(rawData => credential.markFromMongo(rawData.ops[0]._id));
    }

    editCredential(credential) {
        return this.collection.updateOne({_id: credential.id}, {$set: credential}).then((result) => {
            if (!result.modifiedCount) throw new Error("Can not find Credential id = " + credential.id);
            return credential;
        });
    }

    removeCredential(id) {
        return this.collection.deleteOne({_id: ObjectId(id)}).then(result => {
            if (!result.deletedCount) throw new Error("Can not find Credential with id = " + id);
            return true;
        })
    }

    getAllCredential() {
        return this.collection.find({}).then(rawData => rawData.map((data) => {
            let credential = new Credential(data.userName, data.password);
            return credential.markFromMongo(data._id);
        }))
    }

    findByUserName(userName) {
        return this.collection.findOne({userName: userName}).then(rawData => {
            if (!rawData) return null;
            let credential = new Credential(rawData.userName, rawData.password);
            return credential.markFromMongo(rawData._id);
        })
    }

    findById(id) {
        return this.collection.findOne({_id: ObjectId(id)}).then(rawData => {
            let credential = new Credential(rawData.userName, rawData.password);
            return credential.markFromMongo(rawData._id);
        })
    }
}

module.exports = CredentialRepository;