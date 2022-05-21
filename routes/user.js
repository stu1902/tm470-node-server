const express = require('express');
const router = express.Router();
const user = require('../services/user');

router.get('/', async function(req, res, next) {
    try {
        res.json(user.getMultiple());
    } catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }
});

module.exports = router;