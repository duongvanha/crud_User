/**
 * Created by friendd on 16/12/2016.
 */
let router       = require('express').Router();
const filter     = require('./../middleware');
const Controller = require('./../controller');
router.route('/')
    .get(Controller.UserController.getAll)
    .post(filter.castRequireUser, filter.credentialExists, Controller.UserController.addUser);

router.route('/:id')
    .get(filter.filterId, Controller.UserController.getById)
    .put(filter.filterId, filter.castUser, Controller.UserController.editUser)
    .delete(filter.filterId, Controller.UserController.removeUser);

module.exports = router;