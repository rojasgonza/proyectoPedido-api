const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos
const cors = require('cors')

// conectar mongo !!!!!IMPORTANTE!!!! Para conectar en windows usar 127.0.0.1 en linux 
// Localhost
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/restapi', {
    useNewUrlParser: true
});

// crear el servidor
const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

// Rutas de la app
app.use('/', routes());

// carpeta publica


// puerto
app.listen(5000);