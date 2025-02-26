const express = require ("express");
const routes = express.Router();
const AgenciaController = require('../controller/AgenciaController');

routes.post('/agencia', AgenciaController.createAgencia); // Criar uma nova agência
routes.get('/agencia', AgenciaController.getAgencias); // Obter todas as agências
routes.put('/agencia/:id', AgenciaController.updateAgencia); // Atualizar uma agência
routes.delete('/agencia/:id', AgenciaController.deleteAgencia); // Deletar uma agência

module.exports = routes;