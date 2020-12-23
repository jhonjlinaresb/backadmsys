/* const express=require('express');
const app=express();
const PORT=process.env.PORT || 3001;
const dbconnect = require('./config/dbconnect');
dbconnect();
app.listen(PORT, ()=> console.log('>>>SERVER ONLINE')); */

// importar módulos
const express = require('express');
const bodyParser = require('body-parser');

// Llamar conexión
const dbconnect = require('./config/dbconnect');
dbconnect();

// Llamar express
const app = express();

// Convierte peticiones a JSON
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// Crear puerto de salida para el server
const port = process.env.port || 8080;

// Se envía mensaje para probar respuesta del servidor
app.get('/',(req, res) => res.send('Server Online'));

// Escucha nuestro servidor
app.listen(port, () =>{
    console.log(`Express running on: http://localhost:${port}`);
});