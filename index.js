require('dotenv').config();

const path = require('path');
const express = require('express');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  try {
    const resultado = await pool.query(
      'SELECT id, nombre, descripcion, precio, disponibles, categoria FROM platos ORDER BY id'
    );

    const platos = resultado.rows.map((fila) => ({
      id: fila.id,
      nombre: fila.nombre,
      descripcion: fila.descripcion,
      precio: Number(fila.precio),
      disponibles: fila.disponibles,
      categoria: fila.categoria
    }));

    res.render('index', { titulo: 'Mi Menu', platos: platos });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al consultar la base de datos');
  }
});

app.get('/platos/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(404).render('404', { titulo: 'Plato no encontrado' });
  }

  try {
    const resultado = await pool.query(
      `SELECT p.id, p.nombre, p.descripcion, p.precio, p.disponibles, p.categoria,
              c.nombre AS chef_nombre, c.especialidad AS chef_especialidad
       FROM platos p
       LEFT JOIN chefs c ON c.id = p.chef_id
       WHERE p.id = $1`,
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).render('404', { titulo: 'Plato no encontrado' });
    }

    const fila = resultado.rows[0];
    const plato = {
      id: fila.id,
      nombre: fila.nombre,
      descripcion: fila.descripcion,
      precio: Number(fila.precio),
      disponibles: fila.disponibles,
      categoria: fila.categoria,
      chef: {
        nombre: fila.chef_nombre,
        especialidad: fila.chef_especialidad
      }
    };

    res.render('detalle', { titulo: plato.nombre, plato: plato });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al consultar la base de datos');
  }
});

app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Pagina no encontrada' });
});

app.listen(PORT, () => {
  console.log('Servidor escuchando en http://localhost:' + PORT);
});
