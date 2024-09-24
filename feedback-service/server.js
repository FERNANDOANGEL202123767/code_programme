// feedback-service/server.js
const express = require('express');

const app = express();
const PORT = 3005; // Puerto para el servicio de comentarios y calificaciones

app.use(express.json());

app.post('/feedback', (req, res) => {
  // Lógica para manejar comentarios y calificaciones aquí
  res.send('Comentario o calificación recibido con éxito');
});

app.listen(PORT, () => {
  console.log(`Servicio de comentarios corriendo en http://localhost:${PORT}`);
});
