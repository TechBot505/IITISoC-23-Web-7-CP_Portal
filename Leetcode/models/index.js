const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/Codeforces',{useNewUrlParser:true})
//.then(()=>{
//    console.log("CONNECTION IS ONNN!!!");
//})
//.catch(err=>{
//    console.log("OH NOO ERROR!!!!!");
//    console.log(err)
//})
const problemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    link:String,
    level:String,
    website:String
},
{collection: 'problems'}
);
problemSchema.add({topics:[String]})
const Problem=  mongoose.model('Problem',problemSchema);
module.exports=Problem;
//Problem.insertMany([
//    {name: 'Napoleon Cake',link: 'https://codeforces.com/problemset/problem/1501/B',
//    level: 900,
//    website: 'Codeforces',
//    topics: [ 'dp', 'implementation', 'sortings' ]}
//    ])
//
//.then(data=>{
//    console.log('worked!!');
//    console.log(data);
//})
