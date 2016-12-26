/**
 * Created by friendd on 21/12/2016.
 */
exports.getAll = (req, res, next) => req.app.get('Users').getAll().then(res.json.bind(res)).catch(next);

exports.getById = (req, res, next) => req.app.get('Users').findById(req.params.id).then(res.json.bind(res)).catch(next);

exports.addUser = (req, res, next) => req.app.get('Users').addUser(req.body.user).then(res.json.bind(res)).catch(next);

exports.removeUser = (req, res, next) => req.app.get('Users').removeUser(req.params.id).then(res.json.bind(res)).catch(next);

exports.editUser = (req, res, next) => req.app.get('Users').editUser(req.params.id, req.body.user).then(res.json.bind(res)).catch(next);