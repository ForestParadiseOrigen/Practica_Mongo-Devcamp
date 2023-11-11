const mongoose = require('mongoose')

//definir un schema bootcamp
const BootcampSchema = new mongoose.Schema(
    {
        "name": {            
            type: String,
            unique: [
                true,
                "nombre ya esta registrado"
            ],
            required: [true,
            "Nombre requerido"]
        }
        ,
        "phone":{            
            type: Number,
            required: [
                true,
                "Telefono requerido"],
            max:[
                9999999999,
                "telefono debe de ser de 10 digitos" ],
            min:[
                11111111,  
                "telefono debe de ser de minimo 9 digitos"             
            ]
        },
        "address":{
            type: String,
            required:[
                true,
                "direccion requerida"
            ]
        },
        "topics":{
            type: [ String ],
            enum:
            [
                "Backend",
                "Frontend",
                "Devops",
                "AI"
            ]
        },
        "createdAt":{
            type:Date,
            required:[true,"fecha requerida"]
        } 
    }
)

module.exports = mongoose.model("Bootcamp", 
                                BootcampSchema)