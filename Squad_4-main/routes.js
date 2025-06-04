const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API funcionando corretamente!');
});

// Simula erro 400
router.get('/erro400', (req, res, next) => {
  const err = new Error('Requisição inválida');
  err.statusCode = 400;
  next(err);
});

// Simula erro 404
router.get('/erro404', (req, res, next) => {
  const err = new Error('Recurso não encontrado');
  err.statusCode = 404;
  next(err);
});

// Simula erro 422
router.get('/erro422', (req, res, next) => {
  const err = new Error('Entidade não processável');
  err.statusCode = 422;
  next(err);
});

// Simula erro 500
router.get('/erro500', (req, res, next) => {
  throw new Error('Erro interno do servidor');
});

module.exports = router;