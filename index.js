// Modules Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('./middleware/cors');

const {showUsers, logoutUser} = require('./db/users');
const {showUsersId} = require('./db/users');
const {registerUser} = require('./db/users');
const {deleteUser} = require('./db/users');
const {modifyUser} = require('./db/users');
const {loginUser} = require('./db/users');
const {userTickets, adduserTicket, deleteOne} = require('./db/tickets');
const {computers, addComputer, deleteComputer} = require('./db/inventory');

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
app.use(cors);
app.use(express.json());
app.options('/*', (req, res) => res.send());

//User actions
app.get('/users/showAll', showUsers);
app.get('/users/id/:userId', showUsersId);
app.get('/users/:dni/tickets', userTickets);

app.post('/users/register', registerUser); 
app.post('/users/login', loginUser); 
app.post('/users/logout', logoutUser);
app.post('/users/:dni/tickets', adduserTicket);

app.delete('/users/delete', deleteUser);
//app.delete('/users/:dni/tickets', deleteOne);
app.delete('/users/tickets', deleteOne);

app.put('/users/modify', modifyUser);

//Inventory Actions
app.get('/inventory', computers);
app.post('/inventory', addComputer);
app.delete('/:user/inventory', deleteComputer);

// Crear puerto de salida para el server
const port = process.env.port || 8080;

// Se envía mensaje para probar respuesta del servidor
app.get('/',(req, res) => res.send('Server Online'));

// Escucha nuestro servidor
app.listen(port, () =>{
    console.log(`Express running on: http://localhost:${port}`);
});