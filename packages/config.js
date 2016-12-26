module.exports = (app) => {
    return app.set('config', {
        dbUrl : "mongodb://localhost:27017/test",
        post  : "3000",
        keyJwt: "abcd",
    });
};