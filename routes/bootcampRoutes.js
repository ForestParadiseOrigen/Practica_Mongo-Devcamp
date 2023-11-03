const express = require('express');
const bootcampModels = require('../models/bootcampModels');
// definir un ruteador
const router = express.Router();

router.get(
    '/', async (req, res) => {
        
        // utilizar el modelo para seleccionar todos los boocapms que hay en la base de datos
        const bootcamps = await bootcampModels.find();

        res.json(
            {
                success: true,
                data: bootcamps
            }
        );
    }
);

router.get(
    '/:id', async (req, res) => {
        // extraer el id del bootcamp del paramertro de la URL
        bootcampId = req.params.id

        const bootcamp = await bootcampModels.findById(bootcampId);

        res.json(
            {
                success: true,
                data: bootcamp
            }
        );
    }
);

router.post(
    '/', async (req, res) => {
        // EL NUEVO BOOTCAMP VENDRA AL SERVIDOR POR MEDIO DEL CLIENTE
        const bootcamp = await bootcampModels.create(req.body)
        res.json(
            {
                success: true,
                data: bootcamp
            }
        );
    }
);

router.put(
    '/:id', async (req, res) => {

        const bootcamp = await bootcampModels.findById(bootcampId);
        const updBootcamp = await bootcampModels.findByIdAndUpdate(
            bootcamp,
            req.body,
            {
                new: true
            }
        );

        res.json(
            {
                success: true,
                data: updBootcamp
            }
        );
    }
);

router.delete(
    '/:id', async (req, res) => {

        const bootcamp = req.params.id
        const delBootcamp = await bootcampModels.findByIdAndDelete(
            bootcamp,
            req.body,
            {
                new: true
            }
        );

        res.json(
            {
                success: true,
                data: delBootcamp
            }
        );
    }
);

module.exports = router