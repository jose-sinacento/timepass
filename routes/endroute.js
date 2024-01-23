const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ejercicio timepass</title>
    </head>
    <body>
        <h1>Ruta Final</h1>
        <h2>!Bienvenido a la ruta final!</h2>
        <button>
            <a href="./routes/index.js">Inicio</a>
        </button>
    </body>
    </html>`);
})