// Podemos aplicar la desestructuración porque lo que devuelve es un objeto
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// Obtenemos los argumentos que vienen desde la consola
//console.log(process.argv);
// Asumimos que el argumento 3 tiene el valor de la base, esto puede generar problemas a la larga
/* const [,,arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base); */

//const base = 2;

//console.log(process.argv);
console.log(argv.b);

console.log('base: yargs', argv.b);

crearArchivo(argv.b, argv.l, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)); 