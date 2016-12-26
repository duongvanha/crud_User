/**
 * Created by friendd on 21/12/2016.
 */
module.exports = (req, res, next) => {
    if (!req.params.id) return next(new Error("Id not null"));
    next();
};