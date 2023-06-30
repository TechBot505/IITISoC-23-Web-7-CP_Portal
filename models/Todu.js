const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  link: String,
  topic:[String],
  level: Number,
  website: String
});

module.exports = new mongoose.model("Todu", ProductSchema);
