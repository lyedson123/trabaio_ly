const express = require("express");

const routes = express.Router();

const productscontroller = require("../controller/productscontroller");

routes.get("/", (req, res) => res.send(`<h1>boys and girls</h1>`));

routes.get("/listingProducts", productscontroller.listingProducts);

routes.get("/listingProducts/:id", productscontroller.listingChooseProduct);

routes.delete("/deleteProducts/:id", productscontroller.deleteProducts);

routes.post("/postingProducts", productscontroller.postingProducts);

routes.put("/updatingProducts", productscontroller.updatingProducts);
module.exports = routes;