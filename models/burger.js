const orm = require("../config/orm");

const burger = {
    selectAll: () => {
      orm.selectAll("burgers", (res) => {
        console.log(res);
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

burger.updateOne(false, "Big Bang Burger");