require('dotenv').config();

const path = require('path');
const express = require('express');
const conectarDB = require('./config/db');
const vistasRouter = require('./routes/vistas');
const platosRouter = require('./routes/platos');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', vistasRouter);
app.use('/api/platos', platosRouter);

app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Pagina no encontrada' });
});

conectarDB()
  .then(() => {
    console.log('MongoDB Atlas conectado');
    app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
  })
  .catch((error) => console.error('Error de conexion:', error.message));
