const express = require("express");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const app = express();


//Código do /
app.get("/",(request, response) => {

    response.status(200).send("Teu server n ta de brinqueixons");
});

//Código do /novarota
app.get("/novarota", (request, response) => {
    
    response.send("Nova rota, fodase");
});

//Código do /clienteS
app.get("/clientes", (request, response) => {
    
    const clientes = [
    {

        nome: "Robalto",
        idade: 20
    },
    {
        nome: "Bagre",
        idade: 17
    }
]

response.send(clientes);
});

//Código do /cliente
app.post("/cliente", (request, response) => {

    const cliente = request.body;

    response.send(cliente);
});


app.listen(8080, () => {

    console.log("Começou a putaria");
});