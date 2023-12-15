const users=require('../models/userSchema')
const jwt=require('jsonwebtoken')
const { sign } = require('jsonwebtoken');

//register

exports.register=async(req,res)=>{
    console.log("inside reg file");
    const {username,email,password}=req.body
   try{ const existingUser=await users.findOne({email})
    if (existingUser){ 
        return res.status(406).json({message:"Email already exists"});
    }else{
        const newUser= new users({
            username:username,
            email:email,
            password:password,
            instagram:"",
            linkedin:"",
            profile:""   
        })
        await newUser.save()
        res.status(200).json(newUser)

    }
}
catch(err){
    res.status(401).json("Reg failed error:",err)
}
   
}


//login
exports.login = async (req, res) => {
    console.log("inside login function");
    const {email,password}=req.body
    try {
     const existingUser = await users.findOne({email,password })
     if(existingUser){
         const token= jwt.sign({userId:existingUser._id},"supersecretkey12345") 
         res.status(200).json({
            existingUser,token
         })
     }else{
         res.status(404).json('Invalid Login Details')
     }
 
    }catch(err){
     res.status(401).json(`login api failed error:${err}`)
    }
 }