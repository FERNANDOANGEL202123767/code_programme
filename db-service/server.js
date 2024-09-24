// db-service/server.js
const express = require('express');

const app = express();
const PORT = 3007; // Puerto para el servicio de base de datos

app.use(express.json());

// Este servicio solo debería manejar solicitudes internas

app.get('/data', (req, res) => {
  // Lógica para acceder a datos aquí
  res.send('Acceso a datos exitoso');
});

app.listen(PORT, () => {
  console.log(`Servicio de base de datos corriendo en http://localhost:${PORT}`);
});
