const { rejects } = require('assert');
const colors = require('colors');
const fs = require('fs');
const { resolve } = require('path');

function crearTabla(base, listar, hasta) {

    let salida = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base*index}\n`;
        consola += `${base} ${'x'.green} ${index} ${'='.green} ${base*index}\n`;
    }

    return new Promise(( resolve, reject) => {

        try {
            if (listar) {
            console.log('===================='.green);
            console.log(`Tabla del: `, colors.cyan(base));
            console.log('===================='.green);
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    } catch (error) {
        reject('Error al gestionar archivo');
    }

})

}

module.exports = { crearTabla };