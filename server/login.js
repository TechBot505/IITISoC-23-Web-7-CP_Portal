const express= require('express');
const app=express();
const path= require('path');

const mongoose= require('mongoose');
const User= require('./user');
mongoose.connect('mongodb://127.0.0.1:27017/user');

const db=mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function () {
    console.log("connection open!");
});
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended :true}))
app.post('/signup',function (req,res){

var email=req.body.email;
var username= req.body.username;
var pass= req.body.password;
var data= {
    "username": username,
    "email":email,
    "password":pass

}
db.collection('details').insertOne(data, function(err, collection){
    if (err) throw err;
    console.log("Record inserted successfully");
    console.log(data);
});
res.redirect('homepage')
})
app.get('/login', (req,res) =>
{
    res.render('login')
})
app.get('/signup', (req,res)=>{
    res.render('signup')
})

app.get('/',(req,res) => {
    res.render('homepage.ejs')
   
})


app.listen(3000, () =>
{
    console.log("app is listening on port 3000");
})