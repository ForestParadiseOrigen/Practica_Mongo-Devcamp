const mongoose = require('mongoose');

// definir Schema
const BoocampSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
            unique: true,
            required: [
                true,
                "Nombre requerido"
            ]
        },
        "phone": {
            type: Number,
            required: [
                true,
                "Numero requerido"
            ],
            maxlength: [
                10,
                "El telefono no puede tener mas de 10 caracteres"
            ],
            minlength: [
                6,
                "El numero debe tener a menos 7 digitos"
            ]
        },
        "address": {
            type: String,
            required: [
                true,
                "La dirección es requerida"
            ]
        },
        "topics": {
            type: [String],
            enum: [
                "Backend",
                "Frontend",
                "Devops",
                "IA"
            ]
        },
        "createdAt": Date
    }
);

module.exports = mongoose.model('Bootcamps', BoocampSchema);