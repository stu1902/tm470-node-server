const express = require('express');
const user = require("../services/user");
const router = express.Router();

/*router.get('/', function (req, res) {
    res.json({message: 'ok'});
});*/

router.get('/', async function(req, res, next) {
    try {
        res.json(user.getMultiple());
    } catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }
});

module.exports = router;