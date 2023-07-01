const router = require("express").Router();
const Product = require('../models/Todu');
const Todu = require("../Todo");
const User= require('../models/user');

// routes
router
  .post("/add/todo", (req, res) => {
    const { todo,fodo } = req.body;
    const newTodu = new Todu({ name:todo,link:fodo });

    // save the todo
    newTodu
      .save()
      .then(() => {
        console.log("Successfully added todo!");
        res.redirect("/main");
      })
      .catch((err) => console.log(err));
  })

  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todu.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todu Successfully!");
        res.redirect("/please");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;