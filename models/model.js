const sql = require('../services/db_connect');

const User = function (user) {
    this.pernumber = user.pernumber;
    this.password = user.password;
    this.username = user.username;
    this.isemployee = user.isemployee;
    this.ismanager = user.ismanager;
}

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created user: ", {id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser});
    });
};

User.getAll = (pernumber, result) => {
    let que = "SELECT * FROM user";
    if (pernumber) {
        que += ` WHERE title LIKE '%${pernumber}%'`;
    }
    sql.query(que, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("users: ", res);
        result(null, res);
    });
};