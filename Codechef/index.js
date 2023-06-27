const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// const methodOverride = require('method-override')


const Product = require('./product');

mongoose.connect('mongodb://127.0.0.1:27017/trial1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))

// const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { level } = req.query;
    if (level==1000) {
        const products = await Product.find({ level:{$lte:1000} })
        res.render('products/problem', { products, level })
    }
    if (level==1300) {
        const products = await Product.find({ level:{$lte:1300,$gte:1000} })
        res.render('products/problem', { products, level })
    }
    if (level==1600) {
        const products = await Product.find({ level:{$lte:1600,$gte:1300} })
        res.render('products/problem', { products, level })
    }
    if (level==1900) {
        const products = await Product.find({ level:{$lte:1900,$gte:1600} })
        res.render('products/problem', { products, level })
    }
    if (level==2200) {
        const products = await Product.find({ level:{$lte:2200,$gte:1900} })
        res.render('products/problem', { products, level })
    }
    if (level==2500) {
        const products = await Product.find({ level:{$lte:2500,$gte:2200} })
        res.render('products/problem', { products, level })
    }
    if (level==5000) {
        const products = await Product.find({ level:{$lte:5000,$gte:2500} })
        res.render('products/problem', { products, level })
    }
    
    else {
        const products = await Product.find({})
        res.render('products/problem', { products, level})
    }
})
// **********************************
// INDEX - renders multiple comments
// **********************************
// app.get('/comments', (req, res) => {
//     res.render('comments/index', { comments });
// })
// // **********************************
// // NEW - renders a form
// // **********************************
// app.get('/comments/new', (req, res) => {
//     res.render('comments/new');
// })
// **********************************
// CREATE - creates a new comment
// **********************************
// app.post('/products/to-do', (req, res) => {
//     const { username } = req.body;
//     aaja.push({ username })
//     res.redirect('/products/to-do');
// })

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


