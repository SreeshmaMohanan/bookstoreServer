require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app= express();
const router=require('./Routes/router')
require('./connection/connection')

app.use(cors())
app.use(express.json())
app.use(router)
app.get('/',(req,res)=>{
    res.send("Book server");
})
const PORT= 5000 ||process.env.PORT
app.listen(PORT,()=>{
    console.log("server is running on port 5000")
})