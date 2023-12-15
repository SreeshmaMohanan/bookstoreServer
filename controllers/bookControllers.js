const Books = require('../models/bookSchema')
//add project
exports.addBooks= async(req,res)=>{
    console.log("inside add project function ");
    const userId =req.payload
    const imageUrl=req.file.filename
    const {title,author,description,genre,price,pdfUrl}=req.body
     console.log(userId,pdfUrl,title,author,description,genre,imageUrl,price);
    try {
        const existingBook=await Books.findOne({title})
        if (existingBook) {
            return res.status(406).json("book already exists upload another")
        }else{
            const newBook=new Books({
                title,author,description,genre,imageUrl,price,pdfUrl,userId
            })
            await newBook.save()
            res.status(200).json(newBook)
            
        }
        
    }catch (error) {
        res.status(401).json("error")
        
    }
   
}