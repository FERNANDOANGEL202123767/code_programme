const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Middleware para parsear JSON

const db = mysql.createConnection({
    host: 'database', // Cambiar a 'database' si usas Docker
    user: 'root',
    password: 'code2024',
    database: 'c_program'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Endpoint para insertar usuarios
app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body;

    db.query('INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)', 
        [nuevoUsuario.nombre, nuevoUsuario.email, nuevoUsuario.contrasena], 
        (error, results) => {
            if (error) {
                console.error('Error inserting data:', error);
                return res.status(500).send('Error inserting data');
            }
            res.status(201).send('Usuario creado con éxito');
        });
});

// Endpoint para verificar el servicio
app.get('/', (req, res) => {
    res.send('Servicio de autenticación funcionando');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});
