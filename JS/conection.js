const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // o el que tengas
  database: 'inklusport'
});

connection.connect(err => {
  if (err) throw err;
  console.log('✅ Conectado a MySQL');
});

module.exports = connection;
