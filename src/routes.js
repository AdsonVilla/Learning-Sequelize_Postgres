const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");

routes.post("/planet", PlanetController.store);
routes.get("/planet", PlanetController.index);
routes.put("/planet/:id", PlanetController.put);
routes.delete("/planet/:id", PlanetController.delete);

module.exports = routes;
