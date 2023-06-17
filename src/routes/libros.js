const express = require("express");
const libroSchema = require("../models/libro");
const router = express.Router();
const librosController = require("../controllers/libros");

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
});

//Consultar Libros por id

router.get("/libros/:id", (req, res) =>{
    const { id } = req.params;
    libroSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error }));
});

// Consultar Por Autor
router.post("/autor", (req, res) =>{
    const nombre = req.body.nombreLibro;
    libroSchema
    .find({ nombreLibro: nombre})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error }));
});

// Ruta con controllador

router.get("/data", librosController.Libros)

module.exports = router;
