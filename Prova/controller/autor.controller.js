const { response } = require("express").Router;
const conn = require("../db-conn");

module.exports = ({
    inserir: async (request, reponse) =>{
        const {NOME, NACIONALIDADE} = request.body;
        try {
            if (!NOME){
                response.status(309).send ({msg: "O campo Nome é obrigatório"});
            }
            await conn.raw(`INSERT INTO autor (NOME, NACIONALIDADE) VALUES ("${NOME}", ${!NACIONALIDADE ? null : `"${NACIONALIDADE}"`})`);
            response.status(200).send({msg: "autor cadastrado com sucesso"});
        } catch (error) {
            response.status(500).send ({msg: "Erro ao cadastrar o autor"})
        }
    },

    consultar: async (request,response) =>{
        try{
            response.status(200).send(data[0]);
        } catch (error) {
            response.status(500).send ({msg: "Erro ao carregar a lista"})

        }
    },

    atualizar: async(request, response) =>{
        const { id } = request.params;
        const {NOME, NACIONALIDADE} = request.body;

        await conn.raw(`update autor NOME = "${NOME}", NACIONALIDADE = "${NACIONALIDADE}" WHERE id = ${id}`);
    },

    deletar: async (request, response) =>{
         const { id } = request.params;

         try{
            await conn.raw(`DELETE FROM autor WHERE id = ${id}`);
            response.status(200).send({msg: "Registro excluido com sucesso"});
         }
         catch{
         response.status(500).send({msg: "Erro ao excluir o registro"})
         }
    }
});