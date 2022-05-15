const User = require("../models/model");

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    const users = req.query.pernumber;
    User.getAll(users, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
};
