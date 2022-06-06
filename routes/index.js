const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").get(controllers.getAllUsers).post(controllers.createUser);
router
    .route("/:id")
    .get(controllers.getUser)
    .put(controllers.updateUser)
    .delete(controllers.deleteUser);

module.exports = router;