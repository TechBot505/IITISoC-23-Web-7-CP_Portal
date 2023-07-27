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
    router.get("codechef/all",async(req,res)=>{
      const allProduct = await Product.find({});
      res.render("index",{product: allProduct,user:req.user});
    })
    router.get("codechef/1000",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:1000} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("codechef/1300",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:1300,$gte:1000} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("codechef/1600",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:1600,$gte:1300} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("codechef/1900",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:1900,$gte:1600} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("codechef/2200",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:2200,$gte:1900} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("codechef/2500",async(req,res)=>{
      const allProduct = await Product.find({ level:{$lte:2500,$gte:2200} })
          res.render("index", {product: allProduct,user:req.user })
    })
    router.get("/math",async(req,res)=>{
      const allProduct=await Product.find({topic:'math'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/array",async(req,res)=>{
      const allProduct=await Product.find({topic:'array'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/string",async(req,res)=>{
      const allProduct=await Product.find({topic:'string'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/sorting",async(req,res)=>{
      const allProduct=await Product.find({topic:'sorting'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/basic programming",async(req,res)=>{
      const allProduct=await Product.find({topic:'basic programming'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/data structure",async(req,res)=>{
      const allProduct=await Product.find({topic:'data structure'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/greedy algorithm",async(req,res)=>{
      const allProduct=await Product.find({topic:'greedy algorithm'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/dynamic programming",async(req,res)=>{
      const allProduct=await Product.find({topic:'dynamic programming'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/codechef",async(req,res)=>{
      const allProduct = await Product.find({website:'Codechef'});
      res.render("codechef",{product: allProduct,user:req.user});
    })
    router.get("/all",async(req,res)=>{
      const allProduct = await Product.find({website:'Codechef'});
      res.render("codechef",{product: allProduct,user:req.user});
    })
    router.get("/1000",async(req,res)=>{
      const allProduct = await Product.find({ website:'Codechef',level:{$lte:1000} })
          res.render("codechef", {product: allProduct,user:req.user })
    })
    router.get("/1300",async(req,res)=>{
      const allProduct = await Product.find({ website:'Codechef',level:{$lte:1300,$gte:1000} })
          res.render("codechef", {product: allProduct,user:req.user })
    })
    router.get("/1600",async(req,res)=>{
      const allProduct = await Product.find({ website:'Codechef',level:{$lte:1600,$gte:1300} })
          res.render("codechef", {product: allProduct,user:req.user })
    })
    router.get("/1900",async(req,res)=>{
      const allProduct = await Product.find({ website:'Codechef',level:{$lte:1900,$gte:1600} })
          res.render("codechef", {product: allProduct,user:req.user })
    })
    router.get("/2200",async(req,res)=>{
      const allProduct = await Product.find({website:'Codechef', level:{$lte:2200,$gte:1900} })
          res.render("codechef", {product: allProduct,user:req.user })
    })
    router.get("/2500",async(req,res)=>{
      const allProduct = await Product.find({ website:'Codechef',level:{$lte:2500,$gte:2200} })
          res.render("codechef", {product: allProduct,user:req.user })
    })
    router.get("/codechef/math",async(req,res)=>{
      const allProduct=await Product.find({website:'Codechef',topic:'math'});
      res.render("codechef",{product:allProduct,user:req.user})
    })
    router.get("/codechef/array",async(req,res)=>{
      const allProduct=await Product.find({website:'Codechef',topic:'array'});
      res.render("codechef",{product:allProduct,user:req.user})
    })
    router.get("/codechef/string",async(req,res)=>{
      const allProduct=await Product.find({website:'Codechef',topic:'string'});
      res.render("codechef",{product:allProduct,user:req.user})
    })
    router.get("/codechef/sorting",async(req,res)=>{
      const allProduct=await Product.find({website:'Codechef',topic:'sorting'});
      res.render("codechef",{product:allProduct,user:req.user})
    })
    router.get("/codechef/basic programming",async(req,res)=>{
      const allProduct=await Product.find({website:'Codechef',topic:'basic programming'});
      res.render("codechef",{product:allProduct,user:req.user})
    })
    router.get("/codechef/data structure",async(req,res)=>{
      const allProduct=await Product.find({website:'Codechef',topic:'data structure'});
      res.render("codechef",{product:allProduct,user:req.user})
    })
    router.get("/codechef/greedy algorithm",async(req,res)=>{
      const allProduct=await Product.find({website:'Codechef',topic:'greedy algorithm'});
      res.render("codechef",{product:allProduct,user:req.user})
    })
    router.get("/codechef/dynamic programming",async(req,res)=>{
      const allProduct=await Product.find({website:'Codechef',topic:'dynamic programming'});
      res.render("index",{product:allProduct,user:req.user})
    })
    router.get("/leetcode",async (req,res)=>{
      const allProduct= await Product.find({website:'Leetcode'});
      res.render("leetcode",{product: allProduct,user:req.user })
    })
    router.get("/leetcode/1",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', level:1});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/2",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', level:2});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/3",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', level:3});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/math",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'math'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/array",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'array'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/binary",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'binary search'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/string",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'string'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/greedy",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'greedy algorithm'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/dynamic",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'dynamic programming'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/graph",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'graph'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/sorting",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'sorting'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/prefix",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'prefix sum'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    router.get("/leetcode/two",async (req,res)=>{
      const allProduct =await Product.find({website:'Leetcode', topic:'twp pointers'});
      res.render("leetcode",{product: allProduct, user:req.user})
    })
    // router.get("/codeforces",async(req,res)=>{
    //   const allProduct = await Product.find({website:'Codeforces'});
    //   res.render("codeforces",{product: allProduct,user:req.user})
    // })
    // router.get("/codeforces/1000",async(req,res)=>{
    //   const allProduct = await Product.find({website:'Codeforces',topic:'math'});
    //   res.render("codeforces",{product: allProduct,user:req.user})
    // })
    router.get("/codeforces",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/all",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/800",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',level:{$lte:1000,$gte:800}});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/1100",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',level:{$lte:1300,$gte:1100}});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/1400",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',level:{$lte:1600,$gte:1400}});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/1700",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',level:{$lte:1900,$gte:1700}});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/2000",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',level:{$lte:2200,$gte:2000}});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/2300",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',level:{$lte:2500,$gte:2300}});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    
    router.get("/codeforces/math",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'math'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/sorting",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'sortings'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/data",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'data_structures'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/imple",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'implementation'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/binary",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'binary_search'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/str",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'strings'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/greedy",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'greedy'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/dp",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'dp'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/graph",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'graphs'});
      res.render("codeforces",{product: allProduct,user:req.user})
    })
    router.get("/codeforces/tree",async(req,res)=>{
      const allProduct = await Product.find({website:'Codeforces',topic:'trees'});
      res.render("index",{product: allProduct,user:req.user})
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
    res.render("profile.ejs",{user:req.user});
  })
  

module.exports = router;
