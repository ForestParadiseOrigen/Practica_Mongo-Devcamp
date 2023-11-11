const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema(
    {
        "title":{
            type: String,
            unique: [
                true,
                "titulo ya esta registrado"
            ],
            required: [true,
            "Titulo requerido"]
        },
        "description":{
            type: String,
            required: [true,
                "Descripcion requerida"]
        },
        "weeks":{            
            type: Number,
            required: [
                true,
                "semanas requeridas"]
        },
        "tuition":{
            type: Number,
            required: [
                true]          
        },
       "minimumSkilL":{
            type: [String],
            enum:
            [
                "Beginner",
                "Intermediate",
                "Advanced"
            ],
            required: [
                true]            
       },
       "createdAt":{
        type: Date,
        required:[true,"fecha requerida"]

        }
    }
)

module.exports = mongoose.model("Course", 
                                CourseSchema)
