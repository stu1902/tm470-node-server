const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Daisy2009!',
    database: 'tm470_schema'
});

connection.connect();
console.log ('connected!');

module.exports = connection;