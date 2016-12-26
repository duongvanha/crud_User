let boot = require('./packages');
boot(require('./app')).then((app) => {
    app.listen(app.get('config').post);
    console.log("app listen post: " + app.get('config').post);
}).catch(console.error);