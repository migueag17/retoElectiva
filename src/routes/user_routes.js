const express = require('express');
const userSchema = require('../models/user_models');
const router = express.Router()

/* Añadir */
router.post('/users', (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
});

/* Listar useras */
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});
/* Consultar una usera en especifico */
router.get('/users/:id ', (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
});


/* Eliminar */
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
      
    .catch((error) => res.json({ message: error }))
});

/* Actualizar */
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, mail } = req.body;
    userSchema
    .updateOne({ _id: userId }, { $set: { name, age, mail }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
        });

module.exports = router;
