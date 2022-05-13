const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadosSchema = new Schema ({
    
    nombre: {
        type: String
        },
    telefono: {
        type: Number,
        trim: true
        },
    direccion: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        unique: true
    }
});
module.exports = mongoose.model('Empleados', empleadosSchema);