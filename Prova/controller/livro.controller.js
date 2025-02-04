const { response } = require("express").Router;
const conn = require("../db-conn");

module.exports = ({
    inserir: async (request, reponse) =>{
        const {TITULO, ID_AUTOR, GENERO} = request.body;
        try {
            if (!TITULO){
                response.status(309).send ({msg: "O campo Titulo é obrigatório"});
            }
            await conn.raw(`INSERT INTO LIVRO (TITULO, ID_AUTOR) VALUES ("${TITULO}", ${!ID_AUTOR ? null : `"${ID_AUTOR}"`})`);
            response.status(200).send({msg: "Livro cadastrado com sucesso"});
            await conn.raw(`INSERT INTO LIVRO (TITULO, ID_AUTOR, GENERO) VALUES ("${TITULO}", "${ID_AUTOR}", ${!GENERO ? null : `"${GENERO}"`})`);
            response.status(200).send({msg: "Livro cadastrado com sucesso"});
        } catch (error) {
            response.status(500).send ({msg: "Erro ao cadastrar o Livro"})
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
        const {TITULO, ID_AUTOR, GENERO} = request.body;

        await conn.raw(`update LIVRO TITULO = "${TITULO}", ID_AUTOR = "${ID_AUTOR}", GENERO = "${GENERO}" WHERE id = ${id}`);
    },

    deletar: async (request, response) =>{
         const { id } = request.params;

         try{
            await conn.raw(`DELETE FROM LIVRO WHERE id = ${id}`);
            response.status(200).send({msg: "Registro excluido com sucesso"});
         }
         catch{
         response.status(500).send({msg: "Erro ao excluir o registro"})
         }
    }
});