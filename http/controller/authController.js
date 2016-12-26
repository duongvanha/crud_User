exports.login = (req, res, next) => req.app.get('Authenticator')
    .login(req.body.credential)
    .then(token => {
        res.json({
            status: true,
            token
        })
    }).catch(next);


exports.register = (req, res, next) =>
    req.app.get('RegisterService').register(req.body.credential).then(() => {
        res.json({
            status : true,
            message: "Register success"
        })
    }).catch(next);