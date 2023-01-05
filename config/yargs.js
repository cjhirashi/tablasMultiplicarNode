const { describe, number } = require('yargs');

const argv = require('yargs')
                    .options('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla a crear'
                    })
                    .options('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Selecciona si se lista la tabla en consola'
                    })
                    .options('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Hasta qué número se multiplica'
                    })
                    .check( (argv, options) => {
                        if( isNaN( argv.b ) ) {
                            throw 'La base tiene que ser un número'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv