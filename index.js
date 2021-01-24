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
const {userTickets, adduserTicket, showTickets, deleteOne} = require('./db/tickets');
const {computers, addComputer, deleteComputer, showInventory} = require('./db/inventory');

// Llamar conexión
const dbconnect = require('./config/dbconnect');
dbconnect();

// Llamar express
const app = express();

// Crear puerto de salida para el server    
const PORT = process.env.PORT || 8080;

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
app.get('/users/tickets', showTickets);

app.post('/users/register', registerUser); 
app.post('/users/login', loginUser); 
app.post('/users/logout', logoutUser);
app.post('/users/:dni/tickets', adduserTicket);

app.delete('/users/delete/:id', deleteUser);
//app.delete('/users/:dni/tickets', deleteOne);
app.delete('/users/tickets/:_id', deleteOne);
//app.delete('/users/tickets', deleteOne);
app.post('/users/modify/:id', modifyUser);

app.put('/users/modify/:id', modifyUser);
app.patch('/users/modify/:id', modifyUser);

//Inventory Actions
app.get('/:user/inventory', computers);
app.get('/inventory/showInventory', showInventory);
app.post('/:user/inventory', addComputer);
app.delete('/inventory/:_id', deleteComputer);
//app.delete('/:user/inventory', deleteComputer);



// Se envía mensaje para probar respuesta del servidor
app.get('/',(req, res) => res.send('Server Online'));

// Escucha nuestro servidor
app.listen(PORT, () =>{
    console.log(`Server Online Succesfully`);
});