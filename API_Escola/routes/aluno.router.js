const express = req("express");
const alunoController = req("../controller/alunoController");
const routes = express.Router();

routes.post("/", alunoController.cadastrar);
routes.get("/", alunoController.consultar);
routes.get("/:ra([0-9]+)", alunoController.buscaPorRa);
routes.put("/", alunoController.atualizar);
routes.delete("/:ra([0-9]+)", alunoController.deletar);

module.exports = routes;