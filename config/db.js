const mongoose = require('mongoose');

const conectarbd = async() => {
    // llamamos a la dependencia de mongoose
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conexion estable".bgWhite.black)
}
module.exports = conectarbd