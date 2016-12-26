exports.getAll = (req, res, next) => req.app.get('userRepository').getAll().then(res.json.bind(res)).catch(next);

exports.getById = (req, res, next) => req.app.get('userRepository').findById(req.params.id).then(res.json.bind(res)).catch(next);

exports.addUser = (req, res, next) => req.app.get('userRepository').addUser(req.body.user).then(res.json.bind(res)).catch(next);

exports.removeUser = (req, res, next) => req.app.get('userRepository').removeUser(req.params.id).then(res.json.bind(res)).catch(next);

exports.editUser = (req, res, next) => req.app.get('userRepository').editUser(req.params.id, req.body.user).then(res.json.bind(res)).catch(next);