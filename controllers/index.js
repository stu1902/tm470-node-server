const AppError = require("../utils/appError");
const conn = require("../services/db_connect");

exports.getAllUsers = (req, res, next) => {
    conn.query("SELECT * FROM user", function (err, data, fields) {
        if(err) return next(new AppError(err))
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
};

exports.createUser = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.name, "pending"];
    conn.query(
        "INSERT INTO user (name, status) VALUES(?)",
        [values],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "user created!",
            });
        }
    );
};

exports.getUser = (req, res, next) => {
    if (!req.params.username) {
        return next(new AppError("No user found", 404));
    }
    conn.query(
        "SELECT * FROM user WHERE username = ?",
        [req.params.username],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(200).json({
                status: "success",
                length: data?.length,
                data: data,
            });
        }
    );
};

exports.updateUser = (req, res, next) => {
    if (!req.params.username) {
        return next(new AppError("No user found", 404));
    }
    conn.query(
        "UPDATE user SET status='completed' WHERE id=?",
        [req.params.username],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "user updated!",
            });
        }
    );
};

exports.deleteUser = (req, res, next) => {
    if (!req.params.username) {
        return next(new AppError("No user found", 404));
    }
    conn.query(
        "DELETE FROM user WHERE id=?",
        [req.params.username],
        function (err, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "user deleted!",
            });
        }
    );
}
