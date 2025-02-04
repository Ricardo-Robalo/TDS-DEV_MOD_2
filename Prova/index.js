const express = require('express');
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.routes");
const knex = require("knex");
const conn = require('./db-conn')

const app = express();
app.use(indexRoutes);
app.use(knex);
app.use(bodyParser.json());

conn.raw('SELECT 1').then(() => {
    console.log(`Banco de dados conectado com sucesso!`);
}).catch((erro) => {
    console.log(`Erro ao conectar ao banco de dados ${erro}`);
});

app.listen(8080, () => {
    console.log(`Provinha do Batata hehehe`);
});