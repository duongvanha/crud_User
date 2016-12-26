/**
 * Created by friendd on 21/12/2016.
 */
let router     = require('express').Router();
let filter     = require('./../middleware');
let controller = require('./../controller');
router.route('/')
    .post(controller.AuthController.login)
    .put(filter.credentialExists, controller.AuthController.register);
module.exports = router;