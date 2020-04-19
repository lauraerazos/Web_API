var Modelo = require('../model/estudiante');

function listarEstudiantes(req, res) {
    Modelo.find({}, {nombre:1,apellido:1}, (error, doc) => {
        if (error) {
            res.status(502).json({
                Error: error.errmsg
            });
        } else {
            res.status(200).json({
                Mensaje: "Datos recuperados",
                datos: doc
            });
        }
    });
}

function entregarRegistro(req, res) {
    console.log(req.params);
}

function modificarRegistro(req, res) {
    console.log('modificar registro');
}

async function crearRegistro(req, res) {
    const { id, nombre, apellido, nota } = req.body;
    var estudiante = new Modelo({
        _id: id,
        nombre: nombre,
        apellido: apellido,
        nota: nota
    });
    await estudiante.save((error) => {
        if (error) {
            res.status(502).json({
                Error: error.errmsg
            });
        } else {
            res.status(200).json({
                Mensaje: "Guardado correctamente"
            });
        }
    });
}

function eliminarRegistro(req, res) {
    console.log('eliminar registro');
}

function modificarxCriterio(req, res) {
    console.log('modificar registro x criterio');
}

async function entregarPromedio(req, res) {
    var lista = await Modelo.find({}, {nota:1}, (error) => {
        if (error) {
            return res.status(502).json({
                Error: error.errmsg
            });
        }
    });
    var suma = 0;
    var promedio = 0;
    lista.map(est => {
        suma += est.nota;
    });
    if (lista.length > 0) {
        promedio = suma / lista.length;
        res.status(200).json({
            Mensaje: "El promedio de los estudiantes es ",
            valor: promedio
        });
    } else {
            res.status(200).json({
                Mensaje: "No hay ningún registro"
        });
    }
}

module.exports = {listarEstudiantes, entregarPromedio, entregarRegistro, modificarRegistro, modificarxCriterio, eliminarRegistro, crearRegistro}