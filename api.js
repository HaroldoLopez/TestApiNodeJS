const express = require("express")
const mysql = require("mysql2")
const bodyParser = require("body-parser");

const app = express()
const PORT = 3000

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'haroldo',
  password: 'password',
  database: 'prueba'
})

app.get("/",(req,res)=>{
  console.log("Buscando productos...")
  // Conexion base de datos etc..
  console.log(__dirname);
  res.sendFile(__dirname+'/index.html')
})

app.get("/usuarios", (req, res) => {
  console.log("Buscando usuarios...");
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al buscar usuarios");
    } else {
      res.json(results);
    }
  });
});

app.post("/usuarios", (req, res) => {
  const nombre = req.body.nombre;
  connection.query('INSERT INTO usuarios (nombre) VALUES (?)', [nombre], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al insertar usuario");
    } else {
      res.status(201).send("Usuario insertado con éxito");
    }
  });
});

app.listen(PORT,()=>{
  console.log("El servidor está escuchando el puerto "+PORT)
})
