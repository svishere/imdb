require('dotenv').config()
const express=require('express')
const app=express()
const moviesPage=require('./routes/movies')

const mongoose=require('mongoose')

mongoose.connect(process.env.DB_URL)
const db=mongoose.connection
db.on('error',(errormessage)=>console.log(errormessage))
db.once('open',()=>console.log('Connection Established'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{

  res.send("This is App Page");
  
})
app.use('/api/v1/movies',moviesPage)
app.listen(8080);