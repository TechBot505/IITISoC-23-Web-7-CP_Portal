const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    link: String,
    topic:[String],
    level: Number,
    website: String

})

const Product = mongoose.model('Product', productSchema);


module.exports = Product;