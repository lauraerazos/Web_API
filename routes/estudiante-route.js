var express = require('express');
var router = express.Router();
var controlador = require('../controllers/estudianteController');

router.get('/coleccion', controlador.listarEstudiantes);
router.get('/registro/:id', controlador.entregarRegistro);
router.put('/registro', controlador.modificarRegistro);
router.post('/registro', controlador.crearRegistro);
router.delete('/registro', controlador.eliminarRegistro);
router.put('/coleccion', controlador.modificarxCriterio);
router.get('/notas', controlador.entregarPromedio);

module.exports = router;