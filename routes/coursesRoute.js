const express = require('express');

// definir un ruteador
const router = express.Router();

router.get(
    '/', (req, res) => {
        res.json(
            {
                success: true,
                msg: 'Here we can show all courses'
            }
        );
    }
);

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

router.post(
    '/courses', (req, res) => {
        res.json(
            {
                success: true,
                msg: `We have created a new course`
            }
        );
    }
);

router.put(
    '/:id', (req, res) => {
        res.json(
            {
                success: true,
                msg: `We have to modifie a course with ID: ${req.params.id}`
            }
        );
    }
);