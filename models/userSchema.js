const mongoose=require('mongoose')
const validator=require('validator')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{type:String,unique:true,lowercase:true,
    validator(value){
        if(!validator.isEmail(value)){throw new Error("Invalid Email")}
    }},
    password:{type:String,required:true,minLength:6,maxLength:1024},
    instagram:{
        type:String
       
    },
    linkedin:{
        type:String
       
    },
    profile:{
        type:String,

    }


})
const users= mongoose.model("users",userSchema)
module.exports = users