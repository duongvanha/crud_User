let MongoClient = require('mongodb').MongoClient;
module.exports  = (app) => {
    return MongoClient.connect(app.get('config').dbUrl).then(db => app.set('Collection', db));
};