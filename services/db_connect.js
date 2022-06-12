const mysql = require('mysql2');
const dbConf = require ('./db_config.js');
const connection = mysql.createConnection({
    host: dbConf.db.host,
    user: dbConf.db.user,
    password: dbConf.db.password,
    database: dbConf.db.database,
    waitForConnections: true,
});

connection.connect(error => {
    if (error) throw error;
    console.log ("Connected to database ");
});


let sql = 'SELECT * FROM routes';
connection.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
    console.log(results);
});



module.exports = connection;