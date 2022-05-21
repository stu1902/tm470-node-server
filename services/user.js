const db = require('./db_query');

async function getMultiple(){
    return db.query('SELECT * FROM user');
}

module.exports = {
    getMultiple
}