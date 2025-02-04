const express = require ("express");
const routes = express.Router();
const autorController = require("../controller/autor.controller");

//CRUD
routes.post("/registrar", autorController.inserir);
routes.get("/buscar", autorController.consultar);
routes.put("/atualizar", autorController.atualizar);
routes.delete("/deletar", autorController.deletar);

module.exports = routes;