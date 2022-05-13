const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insumosSchema = new Schema ({
    
    nombre: {
        type: String
        },
    medida: {
        type: String,
        trim: true
        }
});
module.exports = mongoose.model('Insumos', insumosSchema);