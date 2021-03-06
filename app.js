const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
// const base = 6;

console.clear();

// console.log( process.argv );
// console.log( argv );

// console.log( 'base:yargs', argv.base );


// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log ( base );

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.yellow, ' creado' ) )
    .catch( err => console.log(err) );

