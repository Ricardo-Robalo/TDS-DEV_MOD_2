const routes = require("express").Router();

const usuarioController = require("../controller/usuario.controller");

routes.post("/", usuarioController.cadastro);
routes.put("/", usuarioController.atualizar);
routes.get("/", usuarioController.consultar);
routes.delete("/:id([0-9]+)", usuarioController.deletar);

module.exports = routes;