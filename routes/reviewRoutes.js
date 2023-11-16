const express= require('express')
const ReviewModel = require('../models/reviewModel')
const moongose = require('mongoose')

const router =  express.Router()

//traer todos los cursos
router.get("/", async (req, res)=>{
    try {
        const reviews =
        await ReviewModel.find()
        if(reviews.length > 0 ){
            res.json({
                success:true,
                data: reviews
            })
        }else{
            res.
            status(400)
            .json({
                success:false,
                message:"No hay reviews"
            })
        }
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })
    }

})


//traer cursos por id
router.get("/:id", async (req, res)=>{
try {
    reviewId = req.params.id
    if(!moongose.Types.ObjectId.isValid(reviewId)){
        res.status(500)
        .json({
            success: false,
            msg:"identificador es invalido"
        })  
    }else{
        const review = 
        await    ReviewModel.findById(reviewId)
        if(reviewId){
            res.json({
                success:true,
                data: review
            })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`no existe la review cuyo id sea ${reviewId}`
            })
        }
    }
} catch (error) {
    res.status(400)
    .json({
        success:false,
        message:error.message
    }) 
}
})


//crear un curso
router.post("/", async (req, res)=>{
    try {
        const newReview =
        await ReviewModel.create(req.body)

    res.json({
        success:true,
        data: newReview
    })
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        }) 
    }

})


//modificar cursos cursos por id
router.put("/:id", async (req, res)=>{
try {
    const reviewId = req.params.id
    if(!moongose.Types.ObjectId.isValid(reviewId)){
        res.status(500)
        .json({
            success: false,
            msg:"identificador es invalido"
        })  
    }else{
        const updReview= 
            await ReviewModel.findByIdAndUpdate(
                reviewId,
                req.body,
                {
                    new: true
                })
        if(updReview){
            res.json({
                success:true,
                data: updReview
            })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`no existe la review cuyo id sea ${reviewId}`
            })
        }
    }
} catch (error) {
    res.status(400)
    .json({
        success:false,
        message:error.message
    }) 
}
})

router.delete("/:id", async (req, res)=>{
try {
    const reviewId = req.params.id
    if(!moongose.Types.ObjectId.isValid(reviewId)){
        res.status(500)
        .json({
            success: false,
            msg:"identificador es invalido"
        })  
    }else{
        const delReview= 
        await ReviewModel.findByIdAndDelete(
            reviewId
            )
        if(delReview){
            res.json({
                success:true,
                data: delReview
            })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`no existe la review cuyo id sea ${reviewId}`
            })
        }
    }   
} catch (error) {
    res.status(400)
    .json({
        success:false,
        message:error.message
    }) 
}
})

module.exports = router