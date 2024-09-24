// notification-service/server.js
const express = require('express');

const app = express();
const PORT = 3004; // Puerto para el servicio de notificaciones

app.use(express.json());

app.post('/notify', (req, res) => {
  // Lógica para enviar notificaciones aquí
  res.send('Notificación enviada con éxito');
});

app.listen(PORT, () => {
  console.log(`Servicio de notificación corriendo en http://localhost:${PORT}`);
});
