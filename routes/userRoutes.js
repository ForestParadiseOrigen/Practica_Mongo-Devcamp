const express= require('express')

const UserModel = require('../models/userModel')


const router =  express.Router()

//traer todos los cursos
router.get("/", async (req, res)=>{
    //utilizar el modelo para seleccionar todos los bootcamps en la base de datos
    const users =
        await UserModel.find()
    
    res.json({
        success:true,
        data: users
    })
})


//traer cursos por id
router.get("/:id", async (req, res)=>{

    //del parametro de la url
    userId = req.params.id
    const user = 
        await    UserModel.findById(userId)

    res.json({
        success:true,
        data: user
    })
})


//crear un curso
router.post("/", async (req, res)=>{
    //el nuevo bootcamp vendra al servidor
    //a traves del body del cliente
    const newUser =
        await UserModel.create(req.body)

    res.json({
        success:true,
        data: newUser
    })
})


//modificar cursos cursos por id
router.put("/:id", async (req, res)=>{
    
    const userId = req.params.id
    const updUser= 
        await UserModel.findByIdAndUpdate(
            userId,
            req.body,
            {
                new: true
            })
    res.json({
        success:true,
        data: updUser
    })
})

//eliminar un curso
router.delete("/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se eliminara el curso cuyo id es ${req.params.id}`
    })
})

router.delete("/:id", async (req, res)=>{

    const userId = req.params.id
    const delUser= 
    await UserModel.findByIdAndDelete(
        userId
        )
    res.json({
        success:true,
        data: delUser
    })
})

module.exports = router