const mongoose = require('mongoose');

const CategorySchema =  mongoose.Schema({
 name:{type:String,required:true, unique:true}
    

})

module.exports=mongoose.model('Category', CategorySchema)
