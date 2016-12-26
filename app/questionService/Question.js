class Question {
    get title() {
        return this._title;
    }

    markFromMongo(stringId) {
        this._id = new ObjectID(stringId);
        return this;
    }

    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set title(val) {
        this._title = val;
    }

    get answers() {
        return this._answers;
    }

    set answers(val) {
        this._answers = val;
    }

    get accurateAnswers() {
        return this._accurateAnswers;
    }

    set accurateAnswers(val) {
        this._accurateAnswers = val;
    }

    toJson() {
        return {
            title          : this.title,
            answers        : this.answers,
            accurateAnswers: this.accurateAnswers
        }
    }
}

module.exports = Question;