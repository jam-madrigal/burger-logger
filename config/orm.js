const connection = require('./connection');

const orm = {
    // Function to pull all burgers from the database
    selectAll: function(table, cb) {
      let queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },

    // Function that adds a nwe burger to the database
    insertOne: function(name, devoured, cb) {
        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)`
        console.log(queryString);
        name.toString();
        connection.query(queryString, [name, devoured], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    // Function that changes the devour boolean for a specific burger name
    updateOne: function(devoured, condition, cb) {
        // It has to be broken up this way to prevent truncated sql errors, ie; values inside single quotes within the query which does not work
        let queryString = "UPDATE burgers SET devoured = "
        queryString += devoured;
        queryString += ' WHERE '
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;