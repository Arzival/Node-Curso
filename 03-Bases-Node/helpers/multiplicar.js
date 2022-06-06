const fs = require('fs');

const crearTablaDeMultiplicar = async (base, limite = 10) => {
    let resultado = '';
    for (let i = 1; i <= limite; i++) {
        resultado += `${base} * ${i} = ${base * i}\n`;
    }

    const tabla = fs.writeFileSync('tabla.txt', resultado);
    return tabla;

}

module.exports = {
    crearTablaDeMultiplicar
}