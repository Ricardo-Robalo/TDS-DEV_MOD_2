const express = require ("express");
const routes = express.Router();
const ClienteController = require('../controller/ClienteController');

routes.post('/cliente', ClienteController.createCliente);
routes.get('/cliente', ClienteController.getClientes);
routes.put('/cliente/:id', ClienteController.updateCliente);
routes.delete('/cliente/:id', ClienteController.deleteCliente);

module.exports = routes;