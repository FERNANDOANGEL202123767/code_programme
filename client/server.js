// payment-service/server.js
const express = require('express');

const app = express();
const PORT = 3000; // Puerto para el servicio de pago

app.use(express.json());

app.post('/pay', (req, res) => {
  // Lógica de procesamiento de pagos aquí
  res.send('Pago procesado con éxito');
});

app.listen(PORT, () => {
  console.log(`Servicio de pago corriendo en http://localhost:${PORT}`);
});
