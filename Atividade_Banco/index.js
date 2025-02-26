const express = require('express');  //Declara o Express pra poder ser usado
const bodyParser = require("body-parser");  //Declara o Body-Parser pra poder ser usado
const indexRoutes = require("./routes/index.routes");  //Declara o Index Routes pra poder usar no MVC

const app = express();
app.use(indexRoutes);
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log(`Server Ta Ligado`);
});