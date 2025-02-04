const express = require ("express").Router;
const autorRoute = require("./autor.router");
const livroRoute = require("./livro.router");

const routes = express();

routes.use("/autor", autorRoute);
routes.use("/livro", livroRoute);

module.exports = routes;