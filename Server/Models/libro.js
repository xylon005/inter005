const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre del libro obligatorio']
    },
    autor: {
        type: String,
        required: [true, 'Nombre del autor obligatorio']
    },
    precioU: {
        type: Number,
        required: [true, 'Precio requerido']
    },
    disponible: {
        type: Boolean,
        default: true
    },
    categoria: {
        type: String,
        required: [true, 'Categoria requerida'],
    },
    usuario: {
        type: Schema.Types.ObjectId,
        required: [true, 'Usuario requerido'],
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('Productos', productoSchema);