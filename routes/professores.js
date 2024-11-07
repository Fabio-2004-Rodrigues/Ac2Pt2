// routes/professores.js
const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professorController');

router.get('/', professoresController.listarProfessores);

router.get('/:id', professoresController.buscarProfessorPorId);

router.get('/:id/turmas', professoresController.listarTurmas);

router.put('/:id', professoresController.atualizarProfessor);

router.post('/:id/turmas', professoresController.adicionarTurma);

router.get('/departamento/:departamento', professoresController.listarPorDepartamento);

router.delete('/:id', professoresController.removerProfessor);

module.exports = router;
