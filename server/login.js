const express= require('express');
const app=express();
const path= require('path');
const bcrypt= require('bcrypt');
const session= require('express-session');


const mongoose= require('mongoose');
const User= require('./models/user');
mongoose.connect('mongodb://127.0.0.1:27017/user');

const db=mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function () {
    console.log("connection open!");
});
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended :true}));
const sessionOptions = {secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false}
app.use(session(sessionOptions));
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.get('/',(req,res) => {
    res.render('homepage.ejs')
   
})
app.get('/afterlog', (req,res)=> {
    res.render('hlogout')
})

app.get('/signup', (req,res)=>{
    res.render('signup')
})



app.post('/signup',async (req,res) => {
const {email, username, password}= req.body;
const hash= await bcrypt.hash(password, 12);
const user= new User({
    email,
    username,
    password:hash
})
await user.save();
res.redirect('/afterlog')
})
app.get('/login', (req,res) =>
{
    res.render('login')
})

app.post('/login', async (req,res) => {
    const {username, password}=req.body;
  const user= await User.findOne({username});
  const validPassword= await bcrypt.compare(password,user.password)
  if (validPassword)
  {
    req.session.user_id= user._id;
    res.redirect('/secret');
  }
  else{
    res.redirect('/login')
  }
})
app.post('/logout', (req,res) =>{
    req.session.destroy();
    res.redirect('/');
})
app.get('/secret', (req,res) => {
    if (!req.session.user_id)
    {
        res.redirect('/')
    }
    res.render('hlogout')
})



app.listen(3000, () =>
{
    console.log("app is listening on port 3000");
})