const
    passport = require('passport'),
    router = require('express').Router();


router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.json(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();

    res.sendStatus(204);
});

module.exports = (app) => {
    app.use('/auth', router);
};