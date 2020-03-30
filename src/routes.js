const express = require("express");
const routes = express.Router();

const DataController = require('./controllers/DataController');

routes.get("/datas", DataController.index);
routes.post("/datas", DataController.store)

module.exports = routes;