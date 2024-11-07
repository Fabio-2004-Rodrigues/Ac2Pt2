const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dbConfig = require('./config/dbConfig');
const professoresRouter = require('./routes/professores');

app.use('/professores', professoresRouter);
app.use(express.json());

mongoose.connect(dbConfig.uri)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.error("Erro ao conectar:", err));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
