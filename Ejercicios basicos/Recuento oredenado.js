// Una cogerá una lista de diferentes opciones y obtendrá un objeto formado por el nombre de cada opción y el número de veces que aparece.

// La otra función parte del objeto calculado en la función anterior y crea una lista con las opciones ordenadas por el número de veces que aparece en orden creciente.


function contVecesRepetidas(lista){ //Se vuelve objeto con sus valores y la cantidad de estas mismas
    let objeto = {};
    lista.forEach(element => {
       (element in objeto) ? objeto[element]++ :objeto[element] = 1;
    });
    return objeto; //Se devuelve el objeto creado con sus respectivos elenmentos
}

function listarObjeto(objeto){
    let lista = [];
    (Object.entries(objeto)).forEach(
        ([clave, valor]) => lista.push({[clave]: valor})
    );
    return lista;
}


//Oredenar ascendente
function ordenAscend(lista){
    return lista.sort((a, b) =>Object.values(a)[0] - Object.values(b)[0]);
}

//Oredenar descendente
function ordenAscend(lista){
    return lista.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
}

//Ejemplos:
let objeto = contVecesRepetidas(['verde', 'azul', 'verde', 'azul','azul', 'gris']); //Paso lista
console.log(objeto);

let listaObjetos = listarObjeto(objeto);
console.log(listaObjetos);

console.log(ordenAscend(listaObjetos));
