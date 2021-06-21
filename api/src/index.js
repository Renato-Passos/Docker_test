const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'docker_test_default',
  user: 'root',
  password: 'dbdocker',
  database: 'auladocker',
  port: 3306
});

connection.connect();

app.get('/', function(req, res ) { 
    res.send( 'Docker is easy 🐳' ) 
});

app.get('/products', function(req, res) {
  connection.query('SELECT * FROM products', function (error, results) {

    if (error) { 
      throw error
    };

    res.send(results.map(item => ({ name: item.name, price: item.price })));
  });
});

const port = process.env.PORT || 9001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});