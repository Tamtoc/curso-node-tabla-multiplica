const argv = require('yargs')
            .options({
                'b': {
                alias: 'base',
                demandOption: true,     // verifica que tenga un valor sino manda un error
                type: 'number',
                describe: 'Es la base de la tabla de multiplicar'
                },
                'l': {      // bandera --l: sino se manda tendrá false por default
                alias: 'listar',    
                default: false,
                type: 'boolean',
                describe: 'Lista la tabla de multiplicar en consola'
                },
                'h': {      // bandera --l: sino se manda tendrá false por default
                alias: 'hasta',    
                default: 10,
                type: 'number',
                describe: 'Hasta que número se va a multiplicar la base'
                }
            })
            .check( (argv, options) => {
                if ( isNaN( argv.b ) ) {
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .argv;

module.exports = argv;