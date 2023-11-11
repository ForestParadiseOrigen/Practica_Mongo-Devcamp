const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
            required: [true,
                "Nombre requerido"]
        }
        ,
        "email": {
            type: String,
            required: [true,
                "Email requerido"]
        },
        "role": {
            type: String,
            required: [true]
        },
        "password": {
            type: String,
            unique: true,
            required: [true,
                "contraseña requerida"]
        }
    }
)

module.exports = mongoose.model("Review",
    UserSchema)