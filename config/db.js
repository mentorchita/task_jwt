const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usbw',
    database: 'testdb'
});

db.connect(err => {
    if(err) {
        console.error('Error connection to MySQL database', err);
        return;
    } else {
    console.log('Connected to MySQL database');
    }
})

module.exports = db;