const connection = require('./connection');

const orm = {
    selectAll: function(table, cb) {
      let queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },

    insertOne: function(name, devoured, cb) {
        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)`
        console.log(queryString);
        name.toString();
        connection.query(queryString, [name, devoured], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(devoured, nameToUpdate, cb) {
        let queryString = "UPDATE burgers SET devoured = ? WHERE burger_name = ?"
        console.log(queryString);
        nameToUpdate.toString();
        connection.query(queryString, [devoured, nameToUpdate], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;