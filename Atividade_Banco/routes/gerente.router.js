const express = require ("express");
const routes = express.Router();
const GerenteController = require('../controller/GerenteController');

routes.post('/gerente', GerenteController.createGerente);
routes.get('/gerente', GerenteController.getGerentes);
routes.put('/gerente/:id', GerenteController.updateGerente);
routes.delete('/gerente/:id', GerenteController.deleteGerente);

module.exports = routes;