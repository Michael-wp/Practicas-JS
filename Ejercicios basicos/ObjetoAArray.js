// function convertirObjectoAArray(objeto){
//     return Object.entries(objeto);
// }

function convertirObjectoAArray(objeto){
    let resultado = [];
    Object.entries(objeto).forEach(([clave, valor]) => {
        resultado.push(clave, valor);
    });
    return resultado;
}


const objeto = {pan: 23, vino: 10, aceite: 12}
console.log(convertirObjectoAArray(objeto));
