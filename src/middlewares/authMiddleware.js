const userModel=require('../models/user')
const jwt=require('jsonwebtoken')

const verifyAuth=async(req,res,next)=>{
if(req.headers &&req.headers.authorization)
{
 const token=req.headers.authorization
 const verifyToken=jwt.verify(token,process.env.JWT_SECRET)
 if(verifyToken){
    console.log(verifyToken.exp,(Date.now()/1000))
    if(verifyToken.exp<(Date.now()/1000)){
        res.status(400).send({message:'Token Expired Sing In again!'})
    }else{
    const user=await userModel.findById({_id:verifyToken.payload})
    if(user){
      req.user_id=user._id
       next()
    }else{
     res.status(400).send({message:'Token varification failed'})
    }  
    }
    
 }else{
    res.status(400).send({message:'Token varification failed'})
 }
}else{
    res.status(401).send({message:'accessToken is missing'})
}
}
module.exports=verifyAuth