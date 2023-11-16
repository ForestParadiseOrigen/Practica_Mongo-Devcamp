const mongoose = require('mongoose');

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
                true
            ],
            min : 1,
            max : 10
        }
    }
)

module.exports = mongoose.model("Review",
    ReviewSchema)