const routes = require ("express").Router();

routes.post("/", ()=>{});
routes.get("/", ()=>{});
routes.put("/:id([0-9]+)", ()=>{});
routes.delete("/:id([0-9]+)", ()=>{});

module.export = routes;