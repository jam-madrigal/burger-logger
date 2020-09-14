const orm = require("../config/orm");

// Calling back the functions defined in the orm
const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    insertOne: (name, devoured, cb) => {
        orm.insertOne(name, devoured, (res) => {
            cb(res);
        });
    },

    updateOne: (devoured, nameToUpdate, cb) => {
        orm.updateOne(devoured, nameToUpdate, (res) => {
            cb(res);
        });
    },

    delete: (condition, cb) => {
        orm.delete(condition, (res) => {
            cb(res);
        });
    }

  };

module.exports = burger;