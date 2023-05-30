const express = require("express");
const libroSchema = require("../models/libro");
const router = express.Router();

// CREAR LIBRO
router.post('/libros', (req, res) =>{
    const libro = libroSchema(req.body);
    libro.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ menssage: error }))
});


//Consultar Libros

router.get("/libros", (req, res) =>{
    libroSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error }));
})

//Consultar Libros por autor

router.get("/libros/:id", (req, res) =>{
    const { id } = req.params;
    libroSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error }));
})

module.exports = router;
