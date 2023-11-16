const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
    {
        "title": {
            type: String,
            unique: [
                true,
                "titulo ya esta registrado"
            ],
            required: [true,
                "Titulo requerido"]
        },
        "comment": {
            type: String,
            required: [true,
                "Comentario requerido"]
        },
        "rating": {
            type: Number,
            required: [
                true],
            max: [
                5,
                "telefono debe de ser de 1 digitos"],
            min: [
                1,
                "telefono debe de ser de minimo 5 digitos"
            ]
        }
    }
)

module.exports = mongoose.model("Review",
    ReviewSchema)