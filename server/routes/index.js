const router = require("express").Router()
const Product= require("../Todo");
const Todu = require("../models/Todu");
const User= require('../models/user');

// routes will be here....
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
    res.render("index",{product: allProduct})
    }
})
router.get("/please", async(req, res) => {
    const allTodu = await Todu.find();
    res.render("to-do", {todu: allTodu})
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
 router.post("/please",async(req,res)=>{
    var search=req.body.search;
    const allTodu=await Todu.find({name:new RegExp(search, 'i')});
    res.render("to-do",{todu:allTodu});
  })
  router.get("/main", function (req, res) {   
    res.render("main.ejs")}
   )
  router.get("/learn",async(req,res)=>{
    res.render("learn.ejs")
  })

module.exports = router;