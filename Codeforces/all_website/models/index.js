const mongoose = require('mongoose');

const problemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    link:String,
    level:Number,
    website:String
},
{collection: 'problems'}
);
problemSchema.add({topics:[String]})
const Problem=  mongoose.model('Problem',problemSchema);
module.exports=Problem;

