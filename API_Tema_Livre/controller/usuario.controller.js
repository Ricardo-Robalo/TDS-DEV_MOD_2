const conn = require("../mysql-connection");

module.exports = ({

cadastro: (req, res) => {

    const {nome, nick, email} = req.body;

        var comando = ``;

        if (nome) {

            comando = `INSERT INTO CLIENTE(nome) VALUES('${nome}',null)`
            
        } else {

            return res.status(309).send({ msg: "O nome é obrigatorio no cadastro de jogador!" });
        }

        if (nick) {

            comando = `INSERT INTO CLIENTE(nick) VALUES('${nick}',null)`

        } else {

            return res.status(309).send({ msg: "O nick é obrigatorio no cadastro de jogador!" });
        }

        if (email) {

            comando = `INSERT INTO CLIENTE(email) VALUES('${email}',null)`
            
        } else {

            return res.status(309).send({ msg: "O nome é obrigatorio no cadastro de jogador!" });
        }

        conn.raw(comando)
            .then((data) => {
                res.status(200).send({ msg: "Usuário cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar o usuário!");
            });
},
atualizar: (req, res) => {

    
},
consultar: (req, res) => {

},
deletar: (req, res) => {

}

})