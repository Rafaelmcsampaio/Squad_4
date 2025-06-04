function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  const errorResponse = {
    statusCode,
    message: err.message || 'Erro interno no servidor',
    error: err.name || 'InternalServerError',
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
    trace_id: generateTraceId(),
  };

  console.error('[ERRO]', errorResponse); // Log automático

  res.status(statusCode).json(errorResponse);
}

function generateTraceId() {
  return Math.random().toString(36).substring(2, 15);
}

module.exports = errorHandler;