const express = require('express');

const clienteRouter = require('./cliente.router');

const routes = express.Router();

routes.use("/cliente", clienteRouter);

module.exports = routes;