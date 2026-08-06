const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const platos = [
  {
    id: 1,
    nombre: 'Hamburguesa clasica',
    descripcion: 'Carne de res, queso cheddar, lechuga, tomate y pan artesanal.',
    precio: 8.50,
    disponibles: 12,
    categoria: 'Plato fuerte',
    chef: {
      nombre: 'Laura Mendez',
      especialidad: 'Comida rapida'
    }
  },
  {
    id: 2,
    nombre: 'Pizza margarita',
    descripcion: 'Salsa de tomate, mozzarella fresca y hojas de albahaca.',
    precio: 10.00,
    disponibles: 5,
    categoria: 'Plato fuerte',
    chef: {
      nombre: 'Marco Rossi',
      especialidad: 'Cocina italiana'
    }
  },
  {
    id: 3,
    nombre: 'Pasta Alfredo',
    descripcion: 'Fetuccini en salsa cremosa de mantequilla y queso parmesano.',
    precio: 9.75,
    disponibles: 0,
    categoria: 'Plato fuerte',
    chef: {
      nombre: 'Marco Rossi',
      especialidad: 'Cocina italiana'
    }
  },
  {
    id: 4,
    nombre: 'Ensalada Cesar',
    descripcion: 'Lechuga romana, crutones, parmesano y aderezo Cesar.',
    precio: 6.25,
    disponibles: 8,
    categoria: 'Entrada',
    chef: {
      nombre: 'Ana Torres',
      especialidad: 'Cocina saludable'
    }
  }
];

app.get('/', (req, res) => {
  res.render('index', { titulo: 'Mi Menu', platos: platos });
});

app.get('/platos/:id', (req, res) => {
  const id = Number(req.params.id);
  const plato = platos.find((p) => p.id === id);

  if (!plato) {
    return res.status(404).render('404', { titulo: 'Plato no encontrado' });
  }

  res.render('detalle', { titulo: plato.nombre, plato: plato });
});

app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Pagina no encontrada' });
});

app.listen(PORT, () => {
  console.log('Servidor escuchando en http://localhost:' + PORT);
});
