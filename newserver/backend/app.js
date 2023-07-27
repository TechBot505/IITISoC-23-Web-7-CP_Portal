const express = require('express');

const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const path=require('path');
const app = express();
const MongoClient=require('mongodb');
// Passport Config
require('./config/passport')(passport);

// DB Config
// const db = require('./config/keys').mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true ,useUnifiedTopology: true}
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

const url="mongodb+srv://akankshaprasad7458:Fe991QJCxG7kMLtL@cluster0.kug2arm.mongodb.net/";
const connection={
    useNewUrlParser:true,
    useUnifiedTopology: true,
};
mongoose.connect(url,connection)
.then(()=>{
    console.info("connected");
})
.catch((e)=>{
    console.log("err",e);
});

app.set('views', path.join(__dirname, '../frontend/views'))

app.set('views', path.join(__dirname, '../frontend/views')); 

app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));

app.use('/',require('./routes/todo.js'))
app.use('/users', require('./routes/users.js'));
app.post('/logout', (req,res) =>{
  req.session.destroy();
  res.redirect('/');
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
