const routes = require ("express").Router();
const clienteRouter = require("./cliente.router");
const clienteRouter = require("./produto.router");
const clienteRouter = require("./pedido.router");

routes.use("/cliente", clienteRouter);
routes.use("/produto", clienteRouter);
routes.use("/pedido", clienteRouter);   

module.export = routes;