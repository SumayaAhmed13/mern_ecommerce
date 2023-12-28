const EmailSend=require("../helper/EmailHelper");
const {EncodeToken}=require("../helper/TokenHelper");
const UserModel=require("../models/UserModel");
const ProfileModel=require("../models/ProfileModel");
const OTPService=async(req)=>{
   
    try{
    let email=req.params.email;
    let code=Math.floor(100000 + Math.random()*900000);
    let emailText=`Your Verification code is =${code}`
    let emailSubject='Email Verification';

    await EmailSend(email,emailText,emailSubject);
    await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})
    return {status:"Success",message:"6 digit otp send"}

   }
  catch(e){
    return {status:"Fail",data:e}.toString();
  }
}

const VerifyOTPService=async(req)=>{
   try{
    let email=req.params.email;
    let otp=req.params.otp;
    //check user exist
   
    let total=await UserModel.find({email:email,otp:otp}).count('total');
    //console.log(total)

    if(total===1){
      //user id select
      let user_id=await UserModel.find({email:email,otp:otp}).select('_id');
      //console.log(user_id);

      //User token create
      let token=EncodeToken(email,user_id[0]['_id'].toString());
      
      //Update User OTP to 0
      await UserModel.updateOne({email:email},{$set:{otp:0}});

      return {status:"Success",message:"OTP Verifiyed",token:token}

    }

    else{
      return {status:"Fail",message:"Invalid OTP"};
    }

   
   }
   catch(e){
    return {status:"Fail",data:e}.toString();
   }
  }
const SaveProfileService=async(req)=>{
  try{
    let user_id=req.headers.user_id;
    let reqBody=req.body;
    reqBody.userID=user_id;
    await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
    return {status:"Success",message:"User Profile Save successfully"}
  }
  catch(e){
    return {status:"Fail",data:e}.toString();
  }
}



const ReadProfileService=async(req)=>{
  try{
    let user_id=req.headers.user_id;
    let result= await ProfileModel.find({userID:user_id});
    return {status:"Success",data:result}
  }
  catch(e){
    return {status:"Fail",data:e}.toString();
  }
}

module.exports={
    OTPService,
    VerifyOTPService,
    SaveProfileService,
    ReadProfileService
}