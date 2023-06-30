const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();

// conenction to mongodb
mongoose.connect("mongodb://127.0.0.1/trial1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));
