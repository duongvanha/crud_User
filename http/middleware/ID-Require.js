module.exports = (req, res, next) => {
    if (!req.params.id) return next(new Error("Id not null"));
    next();
};