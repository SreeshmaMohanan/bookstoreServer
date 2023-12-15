const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://root:root@cluster0.bzclgrc.mongodb.net/crud?retryWrites=true&w=majority").then(()=>{
    console.log("connected to server");
}).catch((err)=>{
    console.error(err);
})