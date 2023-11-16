const express= require('express')
const BootcampModel = require('../models/bootcampModels')
const moongose = require('mongoose')

//definir un ruteador

const router =  express.Router()

//rutas de bootcamps
///endpoint todos los bootcamps
router.get("/", async (req, res)=>{
    try{
        const bootcamps =
        await BootcampModel.find()
        if(bootcamps.length >0 ){
    
            res.
            status(200).
            json({
                success:true,
                data: bootcamps
    })}else{
        res.
        status(400)
        .json({
            success:false,
            message:"No hay bootcamps"
        })
    }
    }catch(error){
        res.status(400)
        .json({
            success:false,
            message:error.message
        })
    }
    }
    //utilizar el modelo para seleccionar todos los bootcamps en la base de datos

)

//traer bootcamps por id
router.get("/:id", async (req, res)=>{
    // extraer el id del bootcamp 
    //del parametro de la url
    try{        
        bootcampId = req.params.id
    if(!moongose.Types.ObjectId.isValid(bootcampId)){
        res.status(500)
        .json({
            success: false,
            msg:"identificador es invalido"
        })
    }else{
        const bootcamp = 
            await    BootcampModel.findById(bootcampId)
        if(bootcamp){   
            res.json({
            success:true,
            data: bootcamp
         
        })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`no existe el bootcamp cuyo id sea ${bootcampId}`
            })
        }
    }}
    catch(error){
        res.status(400)
        .json({
            success:false,
            message:error.message
        })
    }

})

//crear un bootcamp (una promesa)
router.post("/", async (req, res)=>{
    try{
        const newBootcamp =
        await BootcampModel.create(req.body)

    res.
    status(201)
    .json({
        success:true,
        data: newBootcamp
    })
    }catch(error){
        res.status(400)
        .json({
            success:false,
            message:error.message
        })
    }
    //el nuevo bootcamp vendra al servidor
    //a traves del body del cliente

})

//modificar un bootcamp
router.put("/:id", async (req, res)=>{
    try {
        bootcampId = req.params.id
        if(!moongose.Types.ObjectId.isValid(bootcampId)){
            res.status(500)
            .json({
                success: false,
                msg:"identificador es invalido"
            })        
        }else{
            const updBootcamp= 
                await BootcampModel.findByIdAndUpdate(
                    bootcampId,
                    req.body,
                    {
                        new: true
                    })
            if(updBootcamp){
                res.
                status(200).
                json({
                    success:true,
                    data: updBootcamp
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`no existe el bootcamp cuyo id sea ${bootcampId}`
                })
            }
        } 
    }catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message 
        })       
    }
})

//eliminar un bootcamp
router.delete("/:id", async (req, res)=>{
    
    try {
        const bootcampId = req.params.id
        if(!moongose.Types.ObjectId.isValid(bootcampId)){
            res.status(500)
            .json({
                success: false,
                msg:"identificador es invalido"
            })
        }else{
            const delBootcamp= 
            await BootcampModel.findByIdAndDelete(
                bootcampId
            )
            if(delBootcamp){
                res.
                status(200).
                json({
                    success:true,
                    data: delBootcamp
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`no existe el bootcamp cuyo id sea ${bootcampId}`
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