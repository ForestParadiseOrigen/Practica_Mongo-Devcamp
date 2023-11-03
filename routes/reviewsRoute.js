const express = require('express');

// definir un ruteador
const router = express.Router();

// Rutas de reviews con parametros http://127.0.0.1:5000/reviews
router.get(
    '/', (req, res) => {
        res.json(
            {
                success: true,
                msg: 'Here we can show all reviews'
            }
        );
    }
);

// Rutas de reviews con parametros http://127.0.0.1:5000/reviews/:id
router.get(
    '/:id', (req, res) => {
        res.json(
            {
                success: true,
                msg: `You have give us the ID: ${req.params.id}`
            }
        );
    }
);

// Rutas de reviews con parametros http://127.0.0.1:5000/reviews
router.post(
    '/reviews', (req, res) => {
        res.json(
            {
                success: true,
                msg: `We have created a new reviews`
            }
        );
    }
);

// Rutas de reviews con parametros http://127.0.0.1:5000/reviews
router.put(
    '/:id', (req, res) => {
        res.json(
            {
                success: true,
                msg: `We have to modifie a reviews ${req.params.id}`
            }
        );
    }
);