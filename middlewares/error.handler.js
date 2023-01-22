
//Logea errores
//Se utiliza next para especificar q es un middleware del tipo error
function logErrors (err, req, res, next){
  console.log('logErrors');
  console.error(err);
  next(err);
};

//Crea formato para errores para el cliente (luego no hay otro middleware, es punto final)
function errorHandler (err, req, res, next){
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
};

function boomErrorHandler (err, req, res, next){
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  };
  next(err);
};

module.exports = { logErrors, errorHandler, boomErrorHandler };
