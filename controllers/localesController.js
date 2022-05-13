const { param } = require('express/lib/request');
const Locales = require('../models/locales')


//crear nuevo local
exports.nuevoLocal = async (req, res, next) => {
    const local = new Locales(req.body);
    try {
        await local.save();
        res.json({ mensaje: 'Cliente creado correctamente' })
    } catch (error) {
        console.log(error);
        next();
    }
}

//mostrar locales
exports.mostrarLocales = async (req, res, next) => {

    try {
        const locales = await Locales.find({});
        res.json(locales);
    } catch (error) {
        console.log(error);
        next();
    }
}

//mostrar por id
exports.mostrarLocal = async (req, res, next) => {
    const local = await Locales.findById(req.params.idLocal);
    if (!local) {
        res.json({ mensaje: 'noexiste local' });
        next();
    }
    res.json(local);
}
//editar local x id
exports.actualizarLocal = async (req, res, next) => {
    try {
        const local = await Locales.findOneAndUpdate({ _id: req.params.idLocal }, req.body, { new: true });
        res.json(local)
    } catch (error) {
        console.log(error);
        next();
    }

}
exports.eliminarLocal = async (req,res,next)=>{
    try {
    const local = await Locales.findByIdAndRemove({_id: req.params.idLocal});
        res.json({mensaje: 'Eliminado el local'})
    } catch (error) {
        console.log(error);
        next();
    }    
}