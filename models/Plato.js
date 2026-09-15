const mongoose = require('mongoose');

const platoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  disponibles: Number,
  categoria: String,
  chef: {
    nombre: String,
    especialidad: String
  }
});

module.exports = mongoose.model('Plato', platoSchema);
