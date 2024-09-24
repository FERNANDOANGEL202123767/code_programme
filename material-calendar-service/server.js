// material-calendar-service/server.js
const express = require('express');

const app = express();
const PORT = 3006; // Puerto para el servicio de materiales y calendario

app.use(express.json());

app.post('/material', (req, res) => {
  // Lógica para gestionar materiales aquí
  res.send('Material gestionado con éxito');
});

app.post('/calendar', (req, res) => {
  // Lógica para gestionar el calendario aquí
  res.send('Evento de calendario creado con éxito');
});

app.listen(PORT, () => {
  console.log(`Servicio de material y calendario corriendo en http://localhost:${PORT}`);
});
