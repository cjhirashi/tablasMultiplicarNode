const { crearTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//console.log( process.argv );
//const [ , , arg3] = process.argv;
//const [ , base = 9 ] = arg3.split('=');

//console.log( argv );

//const base = 1;

crearTabla(argv.b, argv.l, argv.h)
    .then( nombreTabla => console.log('Archivo ', nombreTabla.green, ' creado...'))
    .catch( err => console.log(err));

