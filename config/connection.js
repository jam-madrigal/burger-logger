'use strict';
// Dependencies
const util = require('util');
const mysql = require('mysql');

// Defining the connection to make to mySQL
if (process.env.JAWSDB_URL) {
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'programmingsocks',
    database: 'burgers_db'
});

// Connecting to it...
connection.connect();

};

module.exports = connection;