const mysql = require('mysql');
const dbConf = require ('./db_config.js');
const conn = mysql.createConnection({
    host: dbConf.db.host,
    user: dbConf.db.user,
    password: dbConf.db.password,
    database: dbConf.db.database,
});

conn.connect(error => {
    if (error) throw error;
    console.log ("Connected to database ");
});


module.exports = conn;