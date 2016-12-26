exports.getAll = (req, res, next) => req.app.get('questionRepository').getAll().then(res.json.bind(res)).catch(next);

exports.getById = (req, res, next) => req.app.get('questionRepository').findById(req.params.id).then(res.json.bind(res)).catch(next);

exports.addQuestion = (req, res, next) => req.app.get('questionRepository').addUser(req.body.question).then(res.json.bind(res)).catch(next);

exports.removeQuestion = (req, res, next) => req.app.get('questionRepository').removeUser(req.params.id).then(() => {
    res.json({
        status : true,
        message: "Remove Question Success"
    })
}).catch(next);

exports.editQuestion = (req, res, next) => req.app.get('questionRepository').editUser(req.params.id, req.body.question).then(res.json.bind(res)).catch(next);