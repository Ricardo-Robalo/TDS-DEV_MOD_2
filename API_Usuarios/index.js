//Config do express
const express = require("express");

//Declarando "app", uma variavel que recebe o express (Ela vai fazer a função do rest)
const app = express();

//Config do body_parse
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Constante que vai receber os dados, e depois serem preescritos
const cliente = [
    {
        id: 1,
        nome: "Maniel Gimes",
        email: "manigi@gmail.com",
        senha: "mangomango"
    },
]


app.post("/cadastro", (req, res) => {

    const {id, nome, email, senha} = req.body;

    if(!id){

        return res.status(400).send("Insira um ID!")
    } else if (!nome){

        return res.status(400).send("Insira um Nome!")
    } else if (!email){

        return res.status(400).send("Insira um Email!")
    } else if (!senha){
        
        return res.status(400).send("Insira uma Senha!")
    }

    for(let i = 0; i < cliente.length; i++){

        if(cliente[i].id == id){

            return res.status(400).send("O ID ja esta em uso");
        }
    }

    cliente.push(req.body);

    console.log(cliente);

    return res.status(200).send(req.body);

});

app.get("/consulta/:id([0-9]+)", (req, res) => {

    const { id } = req.params;

    const client = cliente.filter(item => item.id == id)

    return res.send(client);
});

app.get("/consulta", (req, res) => {

    res.status(200).send(cliente);
});


app.delete("/deleta/:id([0-9]+)", (req, res)=>{

    const { id } = req.params;

    const index = cliente.findIndex( item => item.id == id);

    if(index === -1){

        return response.status(400).send("Este id não existe!");
    }

    cliente.splice(index, 1);

    return res.send(cliente);
});

app.put("/atualizar", (request, response) => {

    const { id, nome, email, senha } = request.body;

    clientes.filter(item => {
        if (item.id === id){
             item.nome = nome;
             item.email = email;
             item.senha = senha;
            return response.send("Cliente atualizado com sucesso!")
        }
    })

    return response.status(400).send("Cliente não encontrado!");
})

app.listen(8080, () => {

    //Inicialização do server
    console.log("Sin Salabin Ziriguidun, Batatão dentro do teu bumbum");
});