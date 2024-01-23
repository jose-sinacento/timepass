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
        <h1>¡Bienvenidos!</h1>
        <button>
            <a href="./routes/endroute.js">Endroute</a>
        </button>
    </body>
    </html>`);
})

router.use('/', (req, res) => {
    res.status(400).send('<h1>Página no encontrada</h1>')
});

module.exports = router;