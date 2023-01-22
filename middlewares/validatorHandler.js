const boom = require('@hapi/boom');

//schema = Recibe esquema, property = Digo donde encontrara la información
//Función que retorna otra función
function validatorHandler (schema, property){
  //Creo middleware de forma dinamica
  return (req, res, next) => {
    const data = req[property];
    //abortEarly: false envia todos los errores que le llegan al cliente
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    };
    next();
  };
};

module.exports = validatorHandler;
