const movieModel=require('../models/movies')
const getAllMovies=async(req,res)=>{
  try{
    const movie=await movieModel.find()
    res.status(201).json(movie)

  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}
const postMovies=async(req,res)=>{
  const newMovie= new movieModel({
    name:req.body.name,
    genre:req.body.genre,
    language:req.body.language,
    releasedYear:req.body.releasedYear,
    rating:req.body.rating
  })
  try{
    const movie = await newMovie.save();
    res.status(201).json(movie)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

const getAmovie=(req,res)=>{
  
  res.status(200).json(res.movies)
}

const updateMovie=async(req,res)=>{
  if(req.body.name!=null){
    res.movies.name=req.body.name
  }
  if(req.body.genre!=null){
    res.movies.genre=req.body.genre
  }
  if(req.body.language!=null){
    res.movies.language=req.body.language
  }
  if(req.body.releasedYear!=null){
    res.movies.releasedYear=req.body.releasedYear
  }
  if(req.body.rating!=null){
    res.movies.rating=req.body.rating
  }

  try{
    const updateMovies=await res.movies.save();
    res.status(201).json(updateMovies);
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
}

const deleteAMovie=async(req,res)=>{
  try{
    await res.movies.deleteOne();
    res.json({message:`Deleted Movie ${res.movies.name}`})
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
}

async function getMovie(req,res,next){
  let movies;
  try{
    movies=await movieModel.findById(req.params.id)
    if(movies==null){
     return res.status(404).json({message:`cannot find movie with id ${req.params.id}`})
    }
  }
  catch(error){
    return res.status(500).json({message:error.message})
  }
  res.movies=movies;
  next()
}


module.exports={getAllMovies,postMovies,getAmovie,getMovie,updateMovie,deleteAMovie}