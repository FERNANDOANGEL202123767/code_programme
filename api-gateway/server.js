// api-gateway/server.js
const express = require('express');
const request = require('request');

const app = express();
const PORT = 3016;

app.use(express.json());

// Proxies para las rutas de los servicios

app.use('/api/auth', (req, res) => {
    request({ url: `http://localhost:8800/api/auth${req.url}`, method: req.method, json: req.body }, (error, response, body) => {
        res.status(response?.statusCode || 500).send(body);
    });
});

app.use('/api/users', (req, res) => {
    request({ url: `http://localhost:8800/api/users${req.url}`, method: req.method, json: req.body }, (error, response, body) => {
        res.status(response?.statusCode || 500).send(body);
    });
});

app.use('/api/movies', (req, res) => {
    request({ url: `http://localhost:8800/api/movies${req.url}`, method: req.method, json: req.body }, (error, response, body) => {
        res.status(response?.statusCode || 500).send(body);
    });
});

app.use('/api/lists', (req, res) => {
    request({ url: `http://localhost:8800/api/lists${req.url}`, method: req.method, json: req.body }, (error, response, body) => {
        res.status(response?.statusCode || 500).send(body);
    });
});

app.listen(PORT, () => {
    console.log(`API Gateway running on http://localhost:${PORT}`);
});
