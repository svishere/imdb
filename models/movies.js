const mongoose=require('mongoose')
const movieSchema = new mongoose.Schema({
  name:{
    type:String,
    unique:true,
    required:true
  },
  genre:{
    type:String,
    required:true
  },
  language:{
    type:String,
    required:true
  },
  releasedYear:{
    type:Date,
    min:'1000-01-01',
    max:Date.now(),
    required:true
  },
  rating:{
    type:Number,
    required:true,
    min:0,
    max:5
  }
})

module.exports=mongoose.model('movies',movieSchema)
