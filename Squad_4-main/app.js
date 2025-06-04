const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandler = require('./errorHandler');

// Middleware para processar JSON
app.use(express.json());

// Rotas principais
app.use('/', routes);

// Middleware para rotas não encontradas (404)
app.use((req, res, next) => {
  const err = new Error('Rota não encontrada');
  err.statusCode = 404;
  next(err);
});

// Middleware de erro global (sempre o último)
app.use(errorHandler);

module.exports = app;