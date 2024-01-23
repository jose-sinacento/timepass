const express = require('express');
const app = express();
const index = require('./routes/index');

app.use(index);

app.listen(4000, () => {
    console.log('El servidor está escuchando en el puerto 4000');

})