const connection = require('./connection');

const orm = {
    selectAll: function() {
      let queryString = "SELECT * FROM burgers";
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        console.log(result);
      });
    },

    insertOne: function(name, devoured) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)"
        console.log(queryString);
        connection.query(queryString, [name, devoured], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(devoured, nameToUpdate) {
        let queryString = "UPDATE burgers SET devoured = ? WHERE burger_name = ?"
        console.log(queryString);
        connection.query(queryString, [devoured, nameToUpdate], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;