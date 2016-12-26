const express      = require('express');
const app          = express();
const path         = require('path');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const routers      = require('./http/Routers');
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')))
    .use(routers);

module.exports = app;
