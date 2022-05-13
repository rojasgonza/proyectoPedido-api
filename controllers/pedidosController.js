// el populate sirve para mostrar en el json
const Pedidos = require('../models/pedidos');

exports.nuevoPedido = async (req,res,next)=>{
    const pedido = Pedidos(req.body);
    try {
        await pedido.save();
        res.json({mensaje: 'Pedido Cargado'});
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.mostrarPedidos = async (req,res,next) => {
    try { // asi se muestran las relaciones
            
        const pedidos = await Pedidos.find({}).populate({path: 'empleado', model: 'Empleados'}).populate({
            path: 'pedido.insumos',
            model: 'Insumos'
        }).populate({
            path: 'local',
            model: 'Locales'
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
        
    }
    }
exports.mostrarPedido = async (req,res,next)=> {
    const pedido = await Pedidos.findById(req.params.idPedido).populate({path: 'empleado', model: 'Empleados'}).populate({
        path: 'pedido.insumos',
        model: 'Insumos'
    });
    if (!pedido) {
        res.json({mensaje: "pedido inexistente"});
        next();
    }
    res.json(pedido)
}
exports.actualizarPedido = async (req,res,next) => {
    try {
        let pedido = await Pedidos.findOneAndUpdate({_id: req.params.idPedido}, req.body, {
            new: true
        }).populate({path: 'empleado', model: 'Empleados'}).populate({
            path: 'pedido.insumos',
            model: 'Insumos'
        });
        res.json(pedido); 
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.eliminarPedido = async (req, res, next) => {
    try {
      await Pedidos.findOneAndDelete({_id : req.params.idPedido});
        res.json({mensaje : 'El pedido fue eliminado correctamente'});
    
    } catch (error) {
        console.log(error);
        next();
    }
    }