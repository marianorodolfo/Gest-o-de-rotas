const express = require("express");

const app = express();

app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();

});

app.use(express.json());


app.get("/", function (req, res) {

    res.send("Servidor da Gestão de Rotas funcionando!");

});


app.post("/gerar-rota", function (req, res) {

    const clientes = req.body.clientes;

    console.log("Clientes recebidos:");
    console.log(clientes);

    res.json({
        sucesso: true,
        quantidade: clientes.length,
        mensagem: "Clientes recebidos pelo servidor."
    });

});


app.listen(3000, function () {

    console.log("Servidor funcionando em http://localhost:3000");

});

console.log("Fim do arquivo servidor.js");