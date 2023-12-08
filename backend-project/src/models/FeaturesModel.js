const mongoose= require('mongoose');

const DataSchema=mongoose.Schema({
   name:{type:String,unique:true,required:true},
   des:{type:String,unique:true,required:true},
   img:{type:String,unique:true,required:true},
},{
    timestamps:true,versionKey:false
})

const FeatureModel=mongoose.model('features',DataSchema);
module.exports=FeatureModel