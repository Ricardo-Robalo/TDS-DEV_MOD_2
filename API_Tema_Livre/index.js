const express = require("express");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.routes");

const app = express();

app.use(bodyParser.json());

app.use(indexRoutes);

app.listen(8080, () => {
    console.log(`Vai se fuder conteúdo da porra tomar no cú filha da puta do caralho`);
});