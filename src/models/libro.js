const mongoose = require('mongoose');
const libroSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: false
    },
    edad: {
        type: Number,
        require: false
    },
    nombreLibro: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: false
    },
    precio: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('libro', libroSchema);