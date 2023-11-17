const express= require('express');
const CourseModel = require('../models/courseModel');
const moongose = require('mongoose');

const router =  express.Router()


//CURSOS

//traer todos los cursos
router.get("/", async (req, res)=>{
    try {
        const cources =
            await CourseModel.find()
        if(cources.length >0 ){
            res.
            status(200).
            json({
                success:true,
                data: cources
    })}else{
        res.
        status(400)
        .json({
            success:false,
            message:"We dont have courses. Try again late."
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
    courseId = req.params.id
    if(!moongose.Types.ObjectId.isValid(courseId)){
        res.status(500)
        .json({
            success: false,
            msg:"The ID is invalid"
        })  
    }else{

        const course = 
        await    CourseModel.findById(courseId)
        if(course){
            res.
            status(200).
            json({
                success:true,
                data: course
            })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`We dont have an ID like ${courseId}`
            })
        }
    }
} catch (error) {
    res.status(400)
    .json({
        success:false,
        message:error.message
    })

}})



//crear un curso
router.post("/", async (req, res)=>{
    try {
        const newCourse =
        await CourseModel.create(req.body)

    res.json({
        success:true,
        data: newCourse
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
        const courseId = req.params.id
        if(!moongose.Types.ObjectId.isValid(courseId)){
            res.status(500)
            .json({
                success: false,
                msg:"The ID is invalid"
            })  
        }else{
            const updCourse= 
            await CourseModel.findByIdAndUpdate(
                courseId,
                req.body,
                {
                    new: true
                }) 
            if(updCourse){
                res.
                status(200).
                json({
                    success:true,
                    data: updCourse
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`We dont have an course with a ID like ${courseId}`
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

//eliminar un curso

router.delete("/:id", async (req, res)=>{
try {
    const courseId = req.params.id
    if(!moongose.Types.ObjectId.isValid(courseId)){
        res.status(500)
        .json({
            success: false,
            msg:"The ID in invalid"
        })  
    }else{
        const delCourse= 
        await CourseModel.findByIdAndDelete(
            courseId
            )
            if(delCourse){
                res.json({
                    success:true,
                    data: delCourse
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`We dont have an course with a ID like ${courseId}`
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