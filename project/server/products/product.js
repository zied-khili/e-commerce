var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

var productSchema=mongoose.Schema({
    name:{type:String,unique:true,required:true},
    description:{type:String,required:true},
    section:{type:String},
    quantity:{type:Number},
    imageUrl:{type:String}
})
 
var product=mongoose.model("product",productSchema);
 

module.exports = product;
