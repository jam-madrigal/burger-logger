const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// When the main page is loaded, GET
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST to be used to add a new burger
router.post("/api/burgers", (req, res) => {
    burger.insertOne([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], (result) => {
      res.json({ id: result.insertId });
    });
});

// PUT to be used to update a burgers status as being devoured or not
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;