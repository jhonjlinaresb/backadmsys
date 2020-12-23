const connection = require('./connection');
require('./connection'); // importa el archivo de conexión
const Users = require('./db/users'); // importa el esquema

const users = new Users({ name: 'eldevsin.site' }); // crea la entidad
users.save(); // guarda en bd

const init = async () => {
  const db = await connection(); // obtenemos la conexión

  await db.collection('users').insertOne({ // insertamos un usuario
    name: 'devsin.site'
  });
};

init();