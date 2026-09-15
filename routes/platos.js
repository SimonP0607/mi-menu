const express = require('express');
const router = express.Router();
const Plato = require('../models/Plato');

router.get('/', async (req, res) => {
  const platos = await Plato.find();
  res.status(200).json(platos);
});

router.get('/:id', async (req, res) => {
  try {
    const plato = await Plato.findById(req.params.id);
    if (!plato) return res.status(404).json({ error: 'No encontrado' });
    res.status(200).json(plato);
  } catch (error) {
    res.status(404).json({ error: 'No encontrado' });
  }
});

router.post('/', async (req, res) => {
  const nuevo = await Plato.create(req.body);
  res.status(201).json(nuevo);
});

router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Plato.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: 'No encontrado' });
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(404).json({ error: 'No encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Plato.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'No encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'No encontrado' });
  }
});

module.exports = router;
