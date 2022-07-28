const fs = require('fs');
const colors = require('colors');

// Otra forma de escribir la función sería la siguiente
/* const crearArchivo = async(base = 5) => {
    try {
        console.log('====================');
        console.log(`    Tabla del ${base}     `);
        console.log('====================');
        
        let salida = '';
        
        for (let i = 1; i < 11; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;   
        }
        
        console.log(salida);

        // El código es más simple usando writeFileSync
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

}; */

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try {

        let salida = '', consola = '';
        
        for (let i = 1 ; i <= hasta ; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;  
            consola += `${base} x ${i} = ${base*i}\n`.random; 
        }
        
        if (listar) {
            console.log('===================='.america);
            console.log(`    Tabla del ${base}     `.cyan);
            console.log('===================='.america);
            
            console.log(consola);
        } 
        
        // writeFile(archivo_donde_se_guarda_el_contenido, lo_que_se_va_a_guardar, callback())
        /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
        
            // Si todo sale bien se imprime este mensaje
            console.log(`tabla-${base}.txt creado`);
        }); */

        // El código es más simple usando writeFileSync
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.cyan;
    } catch (err) {
        throw err;
    }
};

// module.exports lo usamos cuando queremos exportar algo, devuleve un objeto
module.exports = {
    crearArchivo // Es redundante ponerlo así crearArchivo: crearArchivo
}