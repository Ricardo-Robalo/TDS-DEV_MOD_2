const express = require('express');
const routes = require('./routes/index.routes');
const bodyParser = req('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(indexRoutes);

app.listen(8080, () =>{

    console.log("Começou a Putaria");
})
