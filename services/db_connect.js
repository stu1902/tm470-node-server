const mysql = require('mysql2');
const dbConf = require ('./db_config.js');
const connection = mysql.createConnection({
    host: dbConf.db.host,
    user: dbConf.db.user,
    password: dbConf.db.password,
    database: dbConf.db.database,
    waitForConnections: true,
    connectionLimit: 10
});

connection.connect(error => {
    if (error) throw error;
    console.log ("Connected to database ");
});


module.exports = connection;