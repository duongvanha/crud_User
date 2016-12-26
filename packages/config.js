/**
 * Created by friendd on 08/12/2016.
 */

module.exports = (app) => {
    return app.set('config', {
        dbUrl : "mongodb://localhost:27017/test",
        post  : "3000",
        keyJwt: "abcd",
    });
};