const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un número'
                    } 
                    return true;
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check((argv, options) => {
                    if (!argv.l) {
                        throw 'No se enlista la tabla'
                    } 
                    return true;
                })
                .option('hasta', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Muestra hasta que número se debe de multiplicar'
                })
                .argv; // Nos permite leer los valore de las banderas que escribamos en la consola --help, ---base 5, etc

module.exports = argv;