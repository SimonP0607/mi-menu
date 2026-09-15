const mongoose = require('mongoose');

function conectarDB() {
  return mongoose.connect(process.env.MONGODB_URI);
}

module.exports = conectarDB;
