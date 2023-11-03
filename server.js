const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const req = require('express/lib/request');
const conectarbd = require('./config/db');

// dependencia de las rutas
const bootcampRoutes = require('./routes/bootcampRoutes');

//Vamos a vincular el archivo a 'config/.env'
dotenv.config(
    {
        path: './config/.env'
    }
);

// conectar a la base de datos
conectarbd();

// Construir el objeto de la app
const app = express();
app.use(express.json());

// conectar las rutas al objeto app
app.use(
    '/api/v1/devcamp/bootcamps', 
    bootcampRoutes
);

// Rutas de prueba http://127.0.0.1:5000/prueba
app.get(
    '/prueba', (request, response) => {
        response.send("<center><h1>¡Wenas pa', como anda!</h1></center>");
    }
);

// Rutas de prueba con parametros http://127.0.0.1:5000/prueba/:id
app.get(
    '/prueba/:id', (request, response) => {
        response.send(`<center><h1>¡Wenas pa', como anda! ${request.params.id}</h1></center>`);
    }
);

// SECCION: LISTENER
app.listen( 
    process.env.PUERTO, () => {
        console.log(`Servidor en ejecución en el puerto: ${process.env.PUERTO}`.bgMagenta.gray.bold);
    }
);