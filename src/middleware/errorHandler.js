function errorHandler(err, req, res, next) {
  const status = err && err.status ? err.status : 500;
  const message = err && err.message ? err.message : 'Unexpected error';

  res.status(status).json({
    error: message,
  });
}

module.exports = errorHandler;
