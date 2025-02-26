const express = require ("express");
const routes = express.Router();
const ContaController = require('../controller/ContaController');

routes.post('/conta', ContaController.createConta);
routes.get('/conta', ContaController.getContas);
routes.put('/conta/:id', ContaController.updateConta);
routes.delete('/conta/:id', ContaController.deleteConta);

module.exports = routes;