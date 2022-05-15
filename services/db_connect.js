const mysql = require('mysql');
const dbConf = require ('./db_config.js');
const connection = mysql.createConnection({
    host: dbConf.HOST,
    user: dbConf.USER,
    password: dbConf.PASSWORD,
    database: dbConf.DB
});

connection.connect(error => {
    if (error) throw error;
    console.log ("Connected to database ");
});

module.exports = connection;