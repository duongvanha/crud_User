/**
 * Created by friendd on 16/12/2016.
 */
let userRouter = require('./router/user');
let router     = require('express').Router();
let authRouter = require('./../http/router/auth');
let filter     = require('./middleware');
router.use('/Users', filter.authenticate, userRouter);
router.use('/Auth', filter.castCredential, authRouter);
router.use((req, res, next) => {
    const err = new Error('API not found');
    return next(err);
});
router.use((err, req, res, next) => {
    console.log(err);
    res.json({
        message: err.message
    })
});
module.exports = router;