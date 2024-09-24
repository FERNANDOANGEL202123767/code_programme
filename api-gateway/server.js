// api-gateway/server.js
const express = require('express');
const request = require('request');

const app = express();
const PORT = 3000; // Puerto para el API Gateway

app.use(express.json());

// Proxy para la ruta de autenticación
app.use('/auth', (req, res) => {
  request({ url: `http://localhost:3001${req.url}`, method: req.method, json: req.body }, (error, response, body) => {
    res.status(response.statusCode).send(body);
  });
});

// Proxy para la ruta de pago
app.use('/pay', (req, res) => {
  request({ url: `http://localhost:3002${req.url}`, method: req.method, json: req.body }, (error, response, body) => {
    res.status(response.statusCode).send(body);
  });
});

// Agrega más rutas según sea necesario...

app.listen(PORT, () => {
  console.log(`API Gateway corriendo en http://localhost:${PORT}`);
});
