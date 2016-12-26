/**
 * Created by friendd on 16/12/2016.
 */
module.exports = (app) => {
    return Promise.resolve(app)
        .then(require('./config'))
        .then(require('./connectDb'))
        .then(require('./repository'))
        .then(require('./service'))
};