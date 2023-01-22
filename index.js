const express = require('express');

//Libreria para evitar problemas con cors (funciona como middleware)
const cors = require('cors');

//const { ro } = require('faker/lib/locales');
//Index no se coloca, se setea automaticamente
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

//Se utiliza este middleware para poder recibir información de json a traves de verbos http
app.use(express.json());

//Origenes que permito que se conecten a api
const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes (origin)) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'));
    };
  }
};
//Habilita a cualquier origen (cualquier dominio)
app.use(cors(options));

//Se le pasa la aplicación a routes/index
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () =>{
  console.log('Mi port' + port)
});
