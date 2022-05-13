const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localesSchema = new Schema ({
    nombre: {
        type: String,
        unique: true
    },
    direccion:{
        type: String
    }
});
module.exports = mongoose.model('Locales', localesSchema);