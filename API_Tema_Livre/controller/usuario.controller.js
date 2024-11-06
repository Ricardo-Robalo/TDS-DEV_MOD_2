const conn = require("../mysql-connection");

module.exports = ({

cadastro: (req, res) => {

    const {nome, nick, email} = req.body;

        if (!nome) {
            return res.status(309).send({ msg: "O nome é obrigatorio no cadastro de jogador!" });
        }

        var comando = ``;

        if (!nick) {
            comando = `INSERT INTO CLIENTE(nome, 
            nick) VALUES('${nome}',null)`
        } else {
            comando = `INSERT INTO CLIENTE(nome, 
            nick) VALUES('${nome}','${nick}')`
        }

        conn.raw(comando)
            .then((data) => {
                res.status(200).send({ msg: "Cliente cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar um cliente!");
            });
},
atualizar: (req, res) => {

},
consultar: (req, res) => {

},
deletar: (req, res) => {

}

})