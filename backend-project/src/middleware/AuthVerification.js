const {DecodeToken}=require('../helper/TokenHelper')

 const AuthVerification=(req,res,next)=>{
    let token=req.headers['token']
  
    if(!token){
       token=req.cookies['token']
    }
    
    let decode=DecodeToken(token);

    if(decode ===null){
      return res.status(401).json({status:"Fail",message:"Unauthorized"})
    }
    else{
        let email=decode['email'];
        let user_id=decode['user_id'];
        req.headers.email=email;
        req.headers.user_id=user_id;
        next()

    }

}
module.exports=AuthVerification;