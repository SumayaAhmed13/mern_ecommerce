const mongoose= require('mongoose');

const DataSchema=mongoose.Schema({
    imag1:{type:String,required:true},
    imag2:{type:String,required:true},
    imag3:{type:String,required:true},
    imag4:{type:String,required:true},
    color:{type:String,required:true},
    size:{type:String,required:true},
    des:{type:String,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
  


},{
    timestamps:true,versionKey:false
})

const ProductDetailModel=mongoose.model('productdetails',DataSchema);
module.exports=ProductDetailModel