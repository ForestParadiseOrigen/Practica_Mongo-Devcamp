const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const req = require('express/lib/request');

//Vamos a vincular el archivo a 'config/.env'
dotenv.config(
    {
        path: './config/.env'
    }
);

// Construir el objeto de la app
app = express();

// SECCION: Pueba

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


// SECCION: Bootcamps

// Rutas de Bootcamps con parametros http://127.0.0.1:5000/boocamps
app.get(
    '/bootcamps', (req, res) => {
        res.json(
            {
                success: true,
                msg: 'aqui se muestran todos los bootcamps'
            }
        );
    }
);

// Rutas de Bootcamps con parametros http://127.0.0.1:5000/boocamps/:id
app.get(
    '/bootcamps/:id', (req, res) => {
        res.json(
            {
                success: true,
                msg: `Nos has brindado el ID: ${req.params.id}`
            }
        );
    }
);

// Rutas de Bootcamps con parametros http://127.0.0.1:5000/boocamps
app.post(
    '/bootcamps', (req, res) => {
        res.json(
            {
                success: true,
                msg: `Se ha creado un bootcamp`
            }
        );
    }
);

// Rutas de Bootcamps con parametros http://127.0.0.1:5000/boocamps
app.put(
    '/bootcamps', (req, res) => {
        res.json(
            {
                success: true,
                msg: `Se ha modificado un bootcamp`
            }
        );
    }
);

// SECCION: Curses

// Rutas de Courses con parametros http://127.0.0.1:5000/courses
app.get(
    '/courses', (req, res) => {
        res.json(
            {
                success: true,
                msg: 'Here we can show all courses'
            }
        );
    }
);

// Rutas de Courses con parametros http://127.0.0.1:5000/courses/:id
app.get(
    '/courses/:id', (req, res) => {
        res.json(
            {
                success: true,
                msg: `You have give us the ID: ${req.params.id}`
            }
        );
    }
);

// Rutas de Courses con parametros http://127.0.0.1:5000/courses
app.post(
    '/courses', (req, res) => {
        res.json(
            {
                success: true,
                msg: `We have created a new course`
            }
        );
    }
);

// Rutas de Courses con parametros http://127.0.0.1:5000/courses
app.put(
    '/courses', (req, res) => {
        res.json(
            {
                success: true,
                msg: `We have to modifie a course`
            }
        );
    }
);

// SECCION: LISTENER
app.listen( 
    process.env.PUERTO, () => {
        console.log(`Servidor en ejecución en el puerto: ${process.env.PUERTO}`.bgMagenta.gray.bold);
    }
);