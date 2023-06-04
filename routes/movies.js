const express=require('express')
const router=express.Router()

const {getAllMovies,postMovies,getAmovie,getMovie,updateMovie,deleteAMovie}=require('../controllers/movies')

router.route('/').get(getAllMovies).post(postMovies)
router.route('/:id').get(getMovie,getAmovie).patch(getMovie,updateMovie).delete(getMovie,deleteAMovie)




module.exports=router