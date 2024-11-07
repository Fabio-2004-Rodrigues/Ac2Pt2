// controllers/professoresController.js
const Professor = require('../models/Professor');

const listarProfessores = async (req, res) => {
    try {
        const professores = await Professor.find();
        res.json(professores);
    } catch (err) {
        res.status(500).json({ message: "Erro ao listar professores", error: err });
    }
};

const buscarProfessorPorId = async (req, res) => {
    try {
        const professor = await Professor.findById(req.params.id);
        if (!professor) {
            return res.status(404).json({ message: "Professor não encontrado" });
        }
        res.json(professor);
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar professor", error: err });
    }
};

const listarTurmas = async (req, res) => {
    try {
        const professor = await Professor.findById(req.params.id);
        if (!professor) {
            return res.status(404).json({ message: "Professor não encontrado" });
        }
        res.json(professor.turmas);
    } catch (err) {
        res.status(500).json({ message: "Erro ao listar turmas", error: err });
    }
};

const atualizarProfessor = async (req, res) => {
    try {
        const professor = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!professor) {
            return res.status(404).json({ message: "Id não existente" });
        }
        res.json(professor);
    } catch (err) {
        res.status(500).json({ message: "Erro ao atualizar professor", error: err });
    }
};

const adicionarTurma = async (req, res) => {
    try {
        const professor = await Professor.findById(req.params.id);
        if (!professor) {
            return res.status(404).json({ message: "Professor não encontrado" });
        }
        professor.turmas.push(req.body);
        await professor.save();
        res.json(professor);
    } catch (err) {
        res.status(500).json({ message: "Erro ao adicionar turma", error: err });
    }
};

const listarPorDepartamento = async (req, res) => {
    try {
        const professores = await Professor.find({ departamento: req.params.departamento });
        res.json(professores);
    } catch (err) {
        res.status(500).json({ message: "Erro ao listar professores", error: err });
    }
};

const removerProfessor = async (req, res) => {
    try {
        const professor = await Professor.findByIdAndDelete(req.params.id);
        if (!professor) {
            return res.status(404).json({ message: "Id não existente" });
        }
        res.json({ message: "Professor removido com sucesso" });
    } catch (err) {
        res.status(500).json({ message: "Erro ao remover professor", error: err });
    }
};

module.exports = {
    listarProfessores,
    buscarProfessorPorId,
    listarTurmas,
    atualizarProfessor,
    adicionarTurma,
    listarPorDepartamento,
    removerProfessor
};
