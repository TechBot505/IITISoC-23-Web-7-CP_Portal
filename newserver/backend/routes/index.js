const express = require('express');
const router = express.Router();
const Todu = require('../models/Todu');

const User= require('../models/User');
const Product=require('../models/Todo');

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('hlogout', {
    user: req.user
  })
);
router.get("/problem", async(req, res) => {
  //     const allProduct = await Product.find();
  //     res.render("index",{product: allProduct})
  // })
  const { level } = req.query;
  if(level==1){
      const allProduct = await Product.find({});
      res.render("index",{product: allProduct});}
      if (level==1000) {
          const allProduct = await Product.find({ level:{$lte:1000} })
          res.render("index", {product: allProduct,level })
      }
      if (level==1300) {
          const allProduct = await Product.find({ level:{$lte:1300,$gte:1000} })
          res.render("index", {product: allProduct,level   })
      }
      if (level==1600) {
          const allProduct = await Product.find({ level:{$lte:1600,$gte:1300} })
          res.render("index", {product: allProduct,level   })
      }
      if (level==1900) {
          const allProduct = await Product.find({ level:{$lte:1900,$gte:1600} })
          res.render("index", {product: allProduct,level   })
      }
      if (level==2200) {
          const allProduct = await Product.find({ level:{$lte:2200,$gte:1900} })
          res.render("index", {product: allProduct,level   })
      }
      if (level==2500) {
          const allProduct = await Product.find({ level:{$lte:2500,$gte:2200} })
          res.render("index", {product: allProduct,level   })
      }
      if (level==5000) {
          const allProduct = await Product.find({ level:{$lte:5000,$gte:2500} })
          res.render("index", {product: allProduct,level   })
      }
     
      const{topic}=req.query;
    if(topic=='math'){
      const allProduct=await Product.find({topic:'math'});
      res.render("index",{product:allProduct,topic})
    }
    if(topic=='array'){
      const allProduct=await Product.find({topic:'array'});
      res.render("index",{product:allProduct,topic})
    }
    if(topic=='string'){
      const allProduct=await Product.find({topic:'string'});
      res.render("index",{product:allProduct,topic})
    }
    if(topic=='sorting'){
      const allProduct=await Product.find({topic:'sorting'});
      res.render("index",{product:allProduct,topic})
    }
    if(topic=='basic programming'){
      const allProduct=await Product.find({topic:'basic programming'});
      res.render("index",{product:allProduct,topic})
    }
    if(topic=='data structure'){
      const allProduct=await Product.find({topic:'data structure'});
      res.render("index",{product:allProduct,topic})
    }
    if(topic=='greedy algorithm'){
      const allProduct=await Product.find({topic:'greedy algorithm'});
      res.render("index",{product:allProduct,topic})
    }
    
      
      else {
          const allProduct = await Product.find();
      res.render("index",{product: allProduct,user:req.user})
      }
  })
  router.get("/please/:id", async(req, res) => {
    const { id } = req.params;
    const user= await User.findById(id).populate('todus');
   
      // const allTodu = await Todu.find();
      res.render("to-do", {user})
  })
  router.get("/problem", async(req, res) => {
      const allProduct = await Product.find();
      res.render("index",{product: allProduct})
  })
  router.post("/problem",async(req,res)=>{
      var search=req.body.search;
      const allProduct = await Product.find({name:new RegExp(search, 'i')});
      res.render("index",{product: allProduct});
    })
    router.get("/all",async(req,res)=>{
      const allProduct = await Product.find({});
      res.render("index",{product: allProduct,user:req.user});
    })
    router.get("/1000",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:1000} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("/1300",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:1300,$gte:1000} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("/1600",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:1600,$gte:1300} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("/1900",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:1900,$gte:1600} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("/2200",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:2200,$gte:1900} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("/2500",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:2500,$gte:2200} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("/math",async(req,res)=>{
      const allProduct=await Product.find({topics:'math'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/array",async(req,res)=>{
      const allProduct=await Product.find({topics:'array'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/string",async(req,res)=>{
      const allProduct=await Product.find({topics:'string'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/sorting",async(req,res)=>{
      const allProduct=await Product.find({topics:'sorting'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/basic programming",async(req,res)=>{
      const allProduct=await Product.find({topics:'basic programming'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/data structure",async(req,res)=>{
      const allProduct=await Product.find({topics:'data structure'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/greedy algorithm",async(req,res)=>{
      const allProduct=await Product.find({topics:'greedy algorithm'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/dynamic programming",async(req,res)=>{
      const allProduct=await Product.find({topics:'dynamic programming'});
      res.render("index",{product:allProduct,user:req.user})
    })
    
    router.get("/codeforces",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/1000",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'math'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/pulkit",async(req,res)=>{
      const allProduct = await Product.find({topic:'math'});
      res.render("index",{product: allProduct,user:req.user})
    })

   router.post("/please/:id",async(req,res)=>{
      var search=req.body.search;
      const allTodu=await Todu.find({name:new RegExp(search, 'i')});
      res.render("to-do",{todu:allTodu});
    })
    router.get("/main", function (req, res) {   
      res.render("main.ejs",{user:req.user});
    }
     )
    router.get("/learn",async(req,res)=>{
      res.render("learn.ejs",{user:req.user})
    })
  router.get("/profile",async(req,res)=>{
    res.render("profile.ejs");
  })
  

module.exports = router;
