const express = require('express');
const router = express.Router();
const Plato = require('../models/Plato');

router.get('/', async (req, res) => {
  const platos = await Plato.find();
  res.render('index', { titulo: 'Mi Menu', platos: platos });
});

router.get('/platos/:id', async (req, res) => {
  try {
    const plato = await Plato.findById(req.params.id);
    if (!plato) return res.status(404).render('404', { titulo: 'Plato no encontrado' });
    res.render('detalle', { titulo: plato.nombre, plato: plato });
  } catch (error) {
    res.status(404).render('404', { titulo: 'Plato no encontrado' });
  }
});

module.exports = router;
