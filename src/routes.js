const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) =>{
    Date.create({
        title: "teste",
        description: "Teste conteudo",
        technology: "React"
    });

    return res.send("oii")
});

module.exports = routes;