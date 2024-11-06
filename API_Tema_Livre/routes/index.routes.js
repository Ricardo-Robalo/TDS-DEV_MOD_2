const routes = require ("express").Router();

const usuarioRouter = require("./usuario.router");

routes.use("/usuario", usuarioRouter);

module.export = routes;