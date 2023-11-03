const express = require('express');

// definir un ruteador
const router = express.Router();

// Rutas de Courses con parametros http://127.0.0.1:5000/users
router.get(
    '/users', (req, res) => {
        res.json(
            {
                success: true,
                msg: 'Here we can show all users'
            }
        );
    }
);

// Rutas de users con parametros http://127.0.0.1:5000/users/:id
router.get(
    '/users/:id', (req, res) => {
        res.json(
            {
                success: true,
                msg: `You have give us the ID: ${req.params.id}`
            }
        );
    }
);

// Rutas de users con parametros http://127.0.0.1:5000/users
router.post(
    '/users', (req, res) => {
        res.json(
            {
                success: true,
                msg: `We have created a new user`
            }
        );
    }
);

// Rutas de users con parametros http://127.0.0.1:5000/users
router.put(
    '/:id', (req, res) => {
        res.json(
            {
                success: true,
                msg: `We have to modifie a user with ID: ${req.params.id}`
            }
        );
    }
);