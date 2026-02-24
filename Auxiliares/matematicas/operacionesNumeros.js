export function descomponerNumero(numero){
    let listado = [];
    let numDiv = 2;

    while (numero > 1) {
        if (numero % numDiv === 0) {
            listado.push(numDiv);
            numero = numero / numDiv;
        } else {
            numDiv++;
        }
    }
    return listado;
}