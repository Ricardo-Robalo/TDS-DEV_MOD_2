const express = require("express");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.routes");

const app = express();

app.use(bodyParser.json());

app.use(indexRoutes);


//_+_+_+_+ DBA +_+_+_+_//
const conn = require("./mysql-connection");

conn.raw('SELECT 1').then(() => {
    console.log(`O banco ta funcionando saporra!`);
}).catch((erro) => {
    console.log(`Deu erro nessa porra: ${erro}`);
});
//_+_+_+_+ DBA +_+_+_+_//

app.listen(8080, () => {
    console.log(`Vai se fuder conteúdo da porra tomar no cú filha da puta do caralho`);
});