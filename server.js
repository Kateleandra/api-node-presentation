const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');

const app = express();

//permitir envio de dados
app.use(express.json());

//iniciando o DB

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{useNewUrlParser: true});

requireDir('./src/models');

app.use("/api", require("./src/routes"));

app.listen(3001)

