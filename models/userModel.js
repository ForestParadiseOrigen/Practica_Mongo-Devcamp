const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
            unique: true,
            required: [true,
                "Name requiered"]
        },
        "email": {
            type: String,
            unique: true,
            required: [true,
                "Email required"],
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Email invalid"        
            ]
        },
        "role": {
            type: String,
            required: [true],
            enum: ["admin", "user", "publisher"],
            default: "user"
        },
        "password": {
            type: String,
            maxlength: [6, "The password is so long"],
            select: false,
            required: [true,
                "Password required"]
        },
        "createAt":{
            type: Date,
            default: Date.now
        }
        
    }
);

userSchema.pre('save', async function(){
    // Generar la sal
    const sal = await bcryptjs.genSalt(10);

    // Encriptar el password con la sal
    this.password = await bcryptjs.hash(this.password, sal);
});

//Password usuario vs password body
userSchema.methods.compararPassword = async function(password){
    return bcryptjs.compare(password, this.password);
}

module.exports = mongoose.model(
    "User",
    userSchema
);