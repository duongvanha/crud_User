let router       = require('express').Router();
const filter     = require('./../middleware');
const controller = require('./../controller');
router.route('/')
    .get(controller.UserController.getAll)
    .post(filter.castRequireUser, filter.credentialExists, controller.UserController.addUser);

router.route('/:id')
    .get(filter.filterId, controller.UserController.getById)
    .put(filter.filterId, filter.castUser, controller.UserController.editUser)
    .delete(filter.filterId, controller.UserController.removeUser);

module.exports = router;