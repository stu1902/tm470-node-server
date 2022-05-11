const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Daisy2009!',
    database: 'tm470_schema'
});

connection.connect();

connection.query('SELECT * FROM TM470_schema.user', (err, rows) => {
    if (err) throw err

    console.log('The solution is: ', rows)
})

console.log ('connected!');

module.exports = connection;