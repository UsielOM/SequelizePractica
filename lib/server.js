const express = require('express');
const mySql = require('../app/models/sql');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (require, response) => {
    response.send("Servidor para practicas de Sequelize funcionando ")

});

app.listen(port, () => {
    console.log(`Servidor listo y escuchando en el localhost:${port}`);
    mySql.init();
});


require('../app/routes/user')(app, mySql);
require('../app/routes/asignacion')(app, mySql);