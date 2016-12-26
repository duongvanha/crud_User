module.exports = (req, res, next) => req.app.get('credentialRepository')
    .findByUserName(req.body.userName)
    .then(credential => {
        if (!credential) next();
        else next(new Error("Account already exists"));

    });