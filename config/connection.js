'use strict';
// Dependencies
const util = require('util');
const mysql = require('mysql');

// Defining the connection to make to mySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'programmingsocks',
    database: 'burgers_db'
});

// Connecting to it...
connection.connect();

// This prevents the unhandled promise error from running viewAllTables() without it and allows async/await syntax 
connection.query = util.promisify(connection.query);

module.exports = connection;