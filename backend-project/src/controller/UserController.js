 const {OTPService,VerifyOTPService,SaveProfileService,
       ReadProfileService}=require("../services/UserServices")

const CreateProductReview=async(req,res)=>{}

const UserOTP=async(req,res)=>{
    let result=await OTPService(req);
    return res.status(200).json(result);

}

const VerifyLogin=async(req,res)=>{
    let result=await VerifyOTPService(req);

    if(result['status']==="Success"){
        
        // CookieOption
       let cookieOption={expires:new Date(Date.now() + 24 *6060* 1000),httpOnly:false}

      //Set Cookie with Response
      res.cookie('token',result['token'],cookieOption)

      return res.status(200).json(result)

   }
   else{
    return res.status(200).json(result);
   }

   
}

const UserLogout=async(req,res)=>{
    let cookieOption={expires:new Date(Date.now() + 24 *6060* 1000),httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json({message:"Logout Successfully"});
}

const CreateProfile=async(req,res)=>{
    let result=await SaveProfileService(req);
    return res.status(200).json(result);
}

const UpdateProfile=async(req,res)=>{
    let result=await SaveProfileService(req);
    return res.status(200).json(result);
}

const ReadProfile=async(req,res)=>{
    let result=await ReadProfileService(req);
    return res.status(200).json(result);
}

module.exports={
    CreateProductReview,
    UserOTP,
    VerifyLogin,
    UserLogout,
    CreateProfile,
    UpdateProfile,
    ReadProfile
}