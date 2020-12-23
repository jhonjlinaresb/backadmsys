/* const express=require('express');
const app=express();
const PORT=process.env.PORT || 3001;
const dbconnect = require('./config/dbconnect');
dbconnect();
app.listen(PORT, ()=> console.log('>>>SERVER ONLINE')); */

// importar módulos
const express = require('express');
const bodyParser = require('body-parser');

//Modular imports
const {showUsers, logoutUser} = require('./db/users');
const {showUsersId} = require('./db/users');
const {registerUser} = require('./db/users');
const {deleteUser} = require('./db/users');
const {modifyUser} = require('./db/users');
const {loginUser} = require('./db/users');
const {userTickets, adduserTicket, deleteOne} = require('./db/tickets');

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

//Middleware

//User actions
app.get('/users/showAll', showUsers);
app.get('/users/id/:userId', showUsersId);
app.get('/users/:dni/tickets', userTickets);

app.post('/users/register', registerUser); //Ya 
app.post('/users/login', loginUser); //Ya
app.post('/users/logout', logoutUser);
app.post('/users/:dni/tickets', adduserTicket);

app.delete('/users/delete', deleteUser);
app.delete('/users/:dni/tickets', deleteOne);

app.put('/users/modify', modifyUser);

// Crear puerto de salida para el server
const port = process.env.port || 8080;

// Se envía mensaje para probar respuesta del servidor
app.get('/',(req, res) => res.send('Server Online'));

// Escucha nuestro servidor
app.listen(port, () =>{
    console.log(`Express running on: http://localhost:${port}`);
});