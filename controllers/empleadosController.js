const Empleados = require('../models/empleados');

exports.nuevoEmpleado = async (req,res,next)=>{
    const empleado = new Empleados(req.body);
    try {
        await empleado.save();
        res.json({mensaje: 'Empleado Cargado'});
    } catch (error) {
        res.send(error);
        next();
    }
}
exports.mostrarEmpleados = async (req,res,next) => {
    const empleados = await Empleados.find({});
    if (!empleados) {
        console.log(error);
        next();
    }
    res.json(empleados);
}

exports.mostrarEmpleado = async (req,res,next) => {
    const empleado = await Empleados.findById(req.params.idEmpleado);
    if (!empleado) {
        res.json({mensaje: 'No se encontro el empleado'});
        next();
    }
    res.json(empleado);
}
exports.actualizarEmpleado = async (req, res, next) => {
    try {
        const empleado = await Empleados.findOneAndUpdate({ _id: req.params.idEmpleado }, req.body, { new: true });
        res.json(empleado)
    } catch (error) {
        res.send(error);
        next();
    }

}
exports.borrarEmpleado = async (req,res,next) => {
    try {
        const empleado = await Empleados.findOneAndDelete({_id: req.params.idEmpleado});
        res.json({mensaje: 'eliminado correctamente'});
        
    } catch (error) {
        console.log(error);
        next();
    }
}