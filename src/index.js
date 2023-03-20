const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);

// (async () => {
//   const Planet = require("../models/Planet");

//   //   const newPlanet = await Planet.create({
//   //     name: "Mercurio",
//   //     position: 1,
//   //   });

//   //   const allPlanets = await Planet.findAll({
//   //     where: {
//   //       name: "Mercurio",
//   //     },
//   //   });

//   //   const updatePlanet = await Planet.findByPk(2);
//   //   updatePlanet.name = "Netuno";
//   //   await updatePlanet.save();

//   const deletePlanet = await Planet.findByPk(4);
//   await deletePlanet.destroy();
//   console.log(deletePlanet);
// })();
