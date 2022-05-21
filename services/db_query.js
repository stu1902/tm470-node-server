const mysql = require('mysql2/promise');
const config = require('./db_config');
const pool = mysql.createPool(config.db);

async function query(sql, params) {
    return pool.execute(sql, params);
}

module.exports = {
    query
}