const mongoose = require('mongoose');

//el modelo que se va a implementar debe ser el mismo a la base de datos

const proveedorSchema = mongoose.Schema({

    empresa: {
        type: String,
        required: true
    },

    ciudad:{
        type: String,
        required: true
    },

    nombreasesor:{
        type: String,
        required: true
    },
    nit:{
        type: Number,
        required: true
    },


    correo:{
        type: String,
        required: true
    },

    numeroContacto: {
        type: Number,
        required: true
    },

    equipoComputo:{
        type: String,
        required: true
    },

    direccion:{
        type: String,
        required: true
    }

},{versionkey: false});

module.exports =mongoose.model('Proveedor', proveedorSchema);