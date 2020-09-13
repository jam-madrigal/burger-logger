const orm = require("../config/orm");

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

  };

module.exports = burger;