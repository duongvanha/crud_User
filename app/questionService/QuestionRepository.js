let ObjectId = require('mongodb').ObjectId;
let Question = require('./Question');
class QuestionRepository {
    constructor(collection) {
        this.collection = collection;
    }

    getAll() {
        return this.collection.find({}).toArray().then((rawUsers) => {
            return rawUsers.map((rawUser) => {
                let question   = new Question();
                question.title = rawUser.title;
                question.markFromMongo(rawUser._id);
                question.answers = rawUser.answers;
                return question;
            })
        });
    }

    findById(id) {
        return this.collection.findOne({_id: ObjectId(id)}).then((rawUser) => {
            if (!rawUser) return null;
            let question   = new Question();
            question.title = rawUser.title;
            question.markFromMongo(rawUser._id);
            question.answers = rawUser.answers;
            return question;
        });
    }

    addQuestion(question) {
        return this.collection.insertOne(question.toJson()).then(rawData => {
            return question.markFromMongo(rawData._id);
        })
    }

    updateQuestion(question) {
        return this.collection.updateOne({_id: question.id}, {$set: question.toJson()}).then((result) => {
            if (!result.modifiedCount) throw new Error("Không tìm thấy question");
            return question;
        });
    }

    removeQuestion(id) {
        return this.collection.deleteOne({_id: ObjectId(id)}).then((result) => {
            if (!result.deletedCount) throw new Error("Không tìm thấy question id: " + id);
            return true;
        });
    }
}

module.exports = QuestionRepository;