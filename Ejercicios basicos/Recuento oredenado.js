// Una cogerá una lista de diferentes opciones y obtendrá un objeto formado por el nombre de cada opción y el número de veces que aparece.

// La otra función parte del objeto calculado en la función anterior y crea una lista con las opciones ordenadas por el número de veces que aparece en orden creciente.


function obtenerObjeto(lista){
    let objeto = {};
    lista.forEach(element => {
       (element in objeto) ? objeto[element]++ :objeto[element] = 1;
    });
    return objeto;
}

function listarObjeto(objeto){
    let lista = [];
    (Object.entries(objeto)).forEach(
        ([clave, valor]) => lista.push({[clave] :valor})
    );
    return lista;
}



//Ejemplo:
let objeto = obtenerObjeto(['verde', 'azul', 'verde', 'azul','azul', 'gris']);
console.log(objeto);

let listaObjetos = listarObjeto(objeto);
console.log(listaObjetos);



























