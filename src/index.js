const express = require('express');
const mongoose = require('mongoose');
const libroRoutes = require('./routes/libros');
require('dotenv').config(); 
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/api', libroRoutes);


// ROUTES
var corsOptions = {
  origin: '0.0.0.0',
  optionsSuccessStatus: 200 
}

app.get("/", (req,res) =>{
  res.send("<h1>Bienvenido a mi api</h1>");
});

/*
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
*/

// MONGO DB CONEXION

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connectado a la bd"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server Funciona", port));

