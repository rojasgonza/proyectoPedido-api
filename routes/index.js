const express = require('express');
const router = express.Router();
const localesController = require('../controllers/localesController');
// const locales = require('../models/locales');
const insumosController = require('../controllers/insumosController');
const empleadosController = require('../controllers/empleadosController');
const pedidosController = require('../controllers/pedidosController');



// /// router get en el primer parametro "req" es lo q se pide al servidor y el segundo la respuesta.
//      router.get('/', (req,res)=>{
//        res.send('inicio')
//     });
module.exports = function(){
  // LOCALES
  //agregar locales
  router.post('/locales', localesController.nuevoLocal);
  //mostrar todos los locales
  router.get('/locales', localesController.mostrarLocales);
  // mostrar local por id
  router.get('/locales/:idLocal', localesController.mostrarLocal);
  //modificar
  router.put('/locales/:idLocal', localesController.actualizarLocal);
  //borrar 
  router.delete('/locales/:idLocal', localesController.eliminarLocal);
 // FIN LOCALES

//  ARTICULOS
//nuevo insumo
  router.post('/insumos', insumosController.nuevoInsumo);
///mostrar insumo
  router.get('/insumos', insumosController.mostrarInsumos);
///Mostrar insumo en particular
  router.get('/insumos/:idInsumo', insumosController.mostrarInsumo);  
//actualizar
  router.put('/insumos/:idInsumo', insumosController.actualizarInsumo);  
//borrar
  router.delete('/insumos/:idInsumo', insumosController.borrarInsumo);
  // FIN ARTICULOS

  // EMPLEADOS
  //nuevo
  router.post('/empleados', empleadosController.nuevoEmpleado);
  //mostrar todos
  router.get('/empleados', empleadosController.mostrarEmpleados);
  //mostrar empleado
  router.get('/empleados/:idEmpleado', empleadosController.mostrarEmpleado);
  //actualizar emmpleado
  router.put('/empleados/:idEmpleado', empleadosController.actualizarEmpleado);
  //borrar empleado
  router.delete('/empleados/:idEmpleado', empleadosController.borrarEmpleado);
  // FIN EMPLEADOS

  // PEDIDOS
  router.post('/pedidos', pedidosController.nuevoPedido);
  router.post('/pedidos/nuevo/:idUsuario', pedidosController.nuevoPedido);

  // mostrar
  router.get('/pedidos', pedidosController.mostrarPedidos);
  // mostrar pedido por id
  router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);
  // actualizar pedido
  router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);
  //borrar pedido
  router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);
  
 //buscar insumos
 router.post('/insumos/busqueda/:query', insumosController.buscarInsumo);

  return router;
  }
