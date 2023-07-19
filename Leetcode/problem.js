const express=require('express');
const mongoose = require('mongoose');
bodyparser = require("body-parser");
mongoose.connect('mongodb://127.0.0.1:27017/Codeforces',{useNewUrlParser:true})
.then(()=>{
    console.log(" MONGO CONNECTION IS ONNN!!!");
})
.catch(err=>{
    console.log("OH NOO MONGO ERROR!!!!!");
    console.log(err)
})

const app=express();
app.use(express.json())
//app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
//app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
//app.use("/js",express.static(path.join(__dirname,"../node_modules/jquery/dist")))


const Problem = require("./models/index.js");

//var database
const path=require("path");
app.use(bodyparser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname,'all_website')))
app.set("views",path.join(__dirname,'views'));
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
app.use("/static", express.static(__dirname + 'public'));


app.get('/problems', async(req,res)=>{
  const{level}=req.query;
  const{topics}=req.query;
  if(topics=='math'){
    const problems=await Problem.find({topics:'math'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='two'){
    const problems=await Problem.find({topics:'two pointers'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='binary'){
    const problems=await Problem.find({topics:'binary search'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='str'){
    const problems=await Problem.find({topics:'string'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='greedy'){
    const problems=await Problem.find({topics:'greedy'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='dynamic'){
    const problems=await Problem.find({topics:'dynamic programming'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='graph'){
    const problems=await Problem.find({topics:'graph'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='sorting'){
    const problems=await Problem.find({topics:'sorting'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='prefix'){
    const problems=await Problem.find({topics:'prefix sum'});
    res.render('problem.ejs',{problems,topics})
  }
  if(topics=='arr'){
    const problems=await Problem.find({topics:'array'});
    res.render('problem.ejs',{problems,topics})
  }
  
  if(level=='hard'){
    const problems=await Problem.find({level:'hard'});
    res.render('problem.ejs',{problems,level});}
  if(level=='medium'){
    const problems=await Problem.find({level:'medium'});
    res.render('problem.ejs',{problems,level});}
  if(level=='easy'){
    const problems=await Problem.find({level:'easy'});
    res.render('problem.ejs',{problems,level});}
  else{
      const problems=await Problem.find({});
      //console.log(problems);
      res.render('problem.ejs',{problems,level});
    }
    

  
})

app.post("/problems",async(req,res)=>{
  var search=req.body.search;
  const problems=await Problem.find({name:new RegExp(search, 'i')});
  res.render('problem.ejs',{problems});
})
//{ '$regex':/^search$/i}

app.get("/main", function (req, res) {   
  res.render("main.ejs")
 


}
    )
app.get("/learn", function (req, res) {   
  res.render("learn.ejs")}
    )

app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000");
    
})
