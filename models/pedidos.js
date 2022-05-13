const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
        empleado: {
            type: Schema.ObjectId,
            ref: 'Empleados'
        },
        local: {
            type: Schema.ObjectId,
            ref: 'Locales'
        },
        pedido: [{
            insumos: {
                type: Schema.ObjectId,
                ref: 'insumos'
            },
            cantidad: Number
        }]
});
module.exports = mongoose.model('Pedidos', pedidosSchema);