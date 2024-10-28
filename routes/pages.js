const express = require('express');
const path = require('path');

// Crear router de Express
const router = express.Router();

// Ruta para el inicio
router.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'inicio.html'));
});

// Ruta para el formulario
router.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'formulario.html'));
});

// Ruta para la informacion
router.get('/informacion', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'informacion.html'));
});

// Exportar el router para usarlo en la aplicación principal
module.exports = router;