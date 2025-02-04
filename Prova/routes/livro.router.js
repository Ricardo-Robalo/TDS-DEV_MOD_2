const express = require ("express");
const routes = express.Router();
const livroController = require("../controller/livro.controller");

//CRUD
routes.post("/registrar", livroController.inserir);
routes.get("/buscar", livroController.consultar);
routes.put("/atualizar", livroController.atualizar);
routes.delete("/deletar", livroController.deletar);

module.exports = routes;