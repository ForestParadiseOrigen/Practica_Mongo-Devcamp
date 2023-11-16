const express = require("express")
const dotenv = require("dotenv")
const colors = require('colors')
const conectarDB = require('./config/db')

//dependencias de rutas
const bootcampRoutes = require('./routes/bootcampsRoutes')
const courseRoutes = require('./routes/courseRoutes')
const reviewRoutes = require('./routes/reviewRoutes')


//vincular el archivo .env
dotenv.config(
    {path:'./config/.env'}
)

//CONECTAR A DB
conectarDB()

//construir objeto app
const app=express()
//confirmar que le llegara informacion json
app.use(express.json())

//conectar las rutas al objeto app
app.use('/api/v1/devcamp/bootcamps',
        bootcampRoutes)

//CURSOS
app.use('/api/v1/devcamp/courses',
        courseRoutes)

//REVIEWS
app.use('/api/v1/devcamp/reviews',
        reviewRoutes)

//USUARIOS
//traer todos los usuarios
app.get("/users", (req, res)=>{
    res.json({
        success:true,
        msg:"aqui se mostraran todos los usuarios"
    })
})

//traer usuario por id
app.get("/users/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se mostrara el usuario cuyo id es ${req.params.id}`
    })
})

//crear un usuario
app.post("/users", (req, res)=>{
    res.json({
        success:true,
        msg:"aqui se creara un nuevo usuario"
    })
})

//modificar usuario por id
app.put("/users/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se modificara el usuario cuyo id es ${req.params.id}`
    })
})

//eliminar una usuario
app.delete("/users/:id", (req, res)=>{
    res.json({
        success:true,
        msg:`aqui se eliminara el usuario cuyo id es ${req.params.id}`
    })
})


//un puerto de ejecucion
app.listen(process.env.PUERTO , ()=>{
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgWhite.blue.bold)
})