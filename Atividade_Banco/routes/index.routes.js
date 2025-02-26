const express = require('express');
const router = express.Router();

const agenciaRoute = require("./agencia.router");
const clienteRoute = require("./cliente.router");
const contaRoute = require("./conta.router");
const gerenteRoute = require("./gerente.router");

router.use("/agencia", agenciaRoute);
router.use("/cliente", clienteRoute);
router.use("/conta", contaRoute);
router.use("/gerente", gerenteRoute);

module.exports = router;