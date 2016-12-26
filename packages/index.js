module.exports = (app) => {
    return Promise.resolve(app)
        .then(require('./config'))
        .then(require('./connectDb'))
        .then(require('./repository'))
        .then(require('./service'))
};