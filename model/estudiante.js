var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estudianteSchema = new Schema({
    _id: {
        type: String,
        required: [true, "Un estudiante debe tener id"],
        max: 10
    },
    nombre: {
        type: String,
        required: [true, "Un estudiante debe tener nombre"]
    },
    apellido: {
        type: String,
        required: [true, "Un estudiante debe tener apellido"]
    },
    nota: {
        type: Number,
        required: [true, "nota obligatoria"]
    }
});
module.exports = mongoose.model("Estudiante", estudianteSchema);