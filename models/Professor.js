const mongoose = require('mongoose');

const turmaSchema = new mongoose.Schema({
    codigo: String,
    disciplina: String,
    alunos: [String]
});

const professorSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    departamento: String,
    turmas: [turmaSchema]
});

module.exports = mongoose.model('Professor', professorSchema);
