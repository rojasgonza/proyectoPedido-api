const { param } = require('express/lib/request');
const Insumos = require('../models/insumos');

exports.nuevoInsumo = async (req,res,next) =>{
    const insumo = new Insumos(req.body)
    try {
        await insumo.save();
        res.json({mensaje: 'Insumo cargado satisfactoriamente'})
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarInsumos = async (req,res,next)=>{
    try {
        const insumos = await Insumos.find({});
    res.json(insumos);
    } catch (error) {
        console.log(error);
        next();
        
    }
}

exports.mostrarInsumo = async (req,res,next)=>{
    const insumo = await Insumos.findById(req.params.idInsumo)
    
    if (!insumo) {
       res.json({mensaje: 'no se encontro insumo'});
       next();
    }
    res.json(insumo);
}
exports.actualizarInsumo = async (req, res, next) => {
    try {
        const insumo = await Insumos.findOneAndUpdate({ _id: req.params.idInsumo }, req.body, { new: true });
        res.json(insumo)
    } catch (error) {
        console.log(error);
        next();
    }

}
exports.borrarInsumo = async (req,res,next)=>{
    try {
        const insumo = await Insumos.findOneAndDelete({_id: req.params.idInsumo});
        res.json({mensaje: 'Borrado de nashi'})
    } catch (error) {
        console.log(error);
        next();        
    }
}
exports.buscarInsumo = async (req,res,next) =>{
    try {
        const { query } = req.params;
        const insumo = await Insumos.find({nombre: new RegExp(query, 'i')});
        res.json(insumo);
    } catch (error) {
        console.log(error)

    }
}