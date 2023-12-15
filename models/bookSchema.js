const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre:{
        type:String,
        required:true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type:String,
        required: true
    },
    pdfUrl: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }

})
const Books = mongoose.model("books", bookSchema)
module.exports = Books