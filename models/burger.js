const orm = require("../config/orm");

const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    insertOne: (name, devoured) => {
        orm.insertOne(name, devoured, (res => {
            console.log(res);
        }));
    },

    updateOne: (devoured, nameToUpdate) => {
        orm.updateOne(devoured, nameToUpdate,(res => {
            console.log(res);
        }));
    },

  };

module.exports = burger;