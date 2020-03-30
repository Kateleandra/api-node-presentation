const express = require("express");
const routes = express.Router();

const DataController = require('./controllers/DataController');

routes.get("/datas", DataController.index);

module.exports = routes;