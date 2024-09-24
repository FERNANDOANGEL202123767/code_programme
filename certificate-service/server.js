// certificate-service/server.js
const express = require('express');

const app = express();
const PORT = 3003; // Puerto para el servicio de certificados

app.use(express.json());

app.post('/certificate', (req, res) => {
  // Lógica para emitir certificados aquí
  res.send('Certificado emitido con éxito');
});

app.listen(PORT, () => {
  console.log(`Servicio de certificados corriendo en http://localhost:${PORT}`);
});
