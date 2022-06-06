
const {crearTablaDeMultiplicar} = require('./helpers/multiplicar');

const base = 38;
const limite = 20;

crearTablaDeMultiplicar(base, limite).then( nombreArchivo => {nombreArchivo, 'creado'}).catch(err => {console.log(err)});
