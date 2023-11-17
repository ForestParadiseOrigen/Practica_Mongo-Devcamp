const express = require("express")
const dotenv = require("dotenv")
const colors = require('colors')
const conectarDB = require('./config/db')

//dependencias de rutas
const bootcampRoutes = require('./routes/bootcampsRoutes');
const courseRoutes = require('./routes/courseRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');


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
        bootcampRoutes);

//CURSOS
app.use('/api/v1/devcamp/courses',
        courseRoutes);

//REVIEWS
app.use('/api/v1/devcamp/reviews',
        reviewRoutes);

//USUARIOS
app.use('/api/v1/devcamp/auth',
        userRoutes);


//un puerto de ejecucion
app.listen(process.env.PUERTO , ()=>{
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgWhite.blue.bold)
})