const {CartListService,SaveCartListService,UpdateCartListService,RemoveCartListService}=require("../services/CartListServices.js");

const CartList=async(req,res)=>{
  let result=await CartListService(req);
  return res.status(200).json(result);

}
const SaveCartList=async(req,res)=>{
  let result=await SaveCartListService(req);
  return res.status(200).json(result);

}
const UpdateCartList=async(req,res)=>{
  let result=await UpdateCartListService(req);
  return res.status(200).json(result);

}
const RemoveCartList=async(req,res)=>{
  let result=await RemoveCartListService(req);
  return res.status(200).json(result);

}
module.exports={
    CartList,
    SaveCartList,
    UpdateCartList,
    RemoveCartList

}
