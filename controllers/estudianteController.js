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

    var id = req.params.id;

    Modelo.find({ _id: id }, (error, doc) => {
        console.log(doc.length);
        if (error) {
            res.status(502).json({
                Error: error.errmsg
            });
        } else {
            if (doc.length === 0) {
                res.status(404).json({
                    Mensaje: "El registro no existe"
                });
            } else {
                res.status(200).json({
                    Mensaje: "Registro recuperado",
                    datos: doc
                });
            }
        }
    });
}

function modificarRegistro(req, res) {

    var id = req.params.id;

    if (!req.body) {
        return res.status(400).json({
            Mensaje: "Debe ingresar los datos a modificar"
        });
    }

    Modelo.findByIdAndUpdate(
        { _id: id },
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nota: req.body.nota
        },
        (error, doc) => {
            if (error) {
                res.status(502).json({
                    Error: error.errmsg
                });
            } else {
                res.status(200).json({
                    Mensaje: "Registro modificado",
                    datos: doc
                });
            }
        }        
    );
}

async function crearRegistro(req, res) {

    if (!req.body) {
        return res.status(400).json({
            Mensaje: "Debe ingresar los datos para crear el registro"
        });
    }

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
                Mensaje: "Registro guardado correctamente"
            });
        }
    });
}

function eliminarRegistro(req, res) {

    var id = req.params.id;

    Modelo.findByIdAndDelete(id, (error, doc) => {
        console.log(doc);
        if (error) {
            res.status(502).json({
                Error: error.errmsg
            });
        } else {
            if (!doc) {
                res.status(404).json({
                    Mensaje: "El registro no existe"
                });
            } else {
                res.status(200).json({
                    Mensaje: "El registro fue eliminado correctamente",
                    datos: doc
                });
            }
        }
    });
}

function modificarxCriterio(req, res) {

    if (!req.body) {
        return res.status(400).json({
            Mensaje: "Debe ingresar el dato a modificar"
        });
    }

    const nota = req.params.nota;

    Modelo.updateMany({ nota: nota }, { $set: { nota: req.body.nota } })
        .then(data => {
            console.log(data.nModified);
            if (data.nModified === 0) {
                res.status(404).json({
                    Mensaje: "No se encontraron registros"
                });
            } else res.json({ Mensaje: `Se modificaron ${data.nModified} registros correctamente` });
        })
        .catch(err => {
            res.status(500).json({
                Mensaje: "Error en el proceso de modificación"
            });
        });
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