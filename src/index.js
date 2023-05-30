const express = require('express');
const mongoose = require('mongoose');
const libroRoutes = require('./routes/libros');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 9000;

// MIDDLEWARE
app.use(express.json());
app.use('/api', libroRoutes);


// ROUTES
var corsOptions = {
    origin: '0.0.0.0',
    optionsSuccessStatus: 200 
  }

app.get("/", cors(corsOptions),(req,res) =>{
    res.send("Bienvenido a mi api");
});
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

// MONGO DB CONEXION

mongoose
    .connect("mongodb+srv://dieferman:yZish3aW0OBce2Gc@cluster0.yhu6c0j.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connectado a la bd"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("server Funciona", port));

