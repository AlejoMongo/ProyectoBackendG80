const express = require('express');
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");
const { check } = require("express-validator");

// Ruta para crear un usuario
// POST api/usuarios
router.post("/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Agregar un email válido").isEmail(),
        check("password", "El password debe tener mínimo 10 caracteres").isLength({
            min: 10,
        }),
    ],
    usuariosController.crearUsuario
);

module.exports = router;
