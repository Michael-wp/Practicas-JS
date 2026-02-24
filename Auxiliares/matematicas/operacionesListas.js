// ----------------------- OPERACIONES

export function multiplicarLista(lista = []){
    return lista.reduce(
        (acumulado, valorActual) => 
        acumulado*valorActual, 
        1
    );
}

export function contarRepeticion(lista = [], elemento){
    return lista.reduce(
        (contador, valor) => 
        valor === elemento ? contador + 1 : contador, 
        0
    );
}

// ----------------------------------------------------------------------------------
// -----------------------FILTRADOS

export function obtenerRepetidos(lista = [], elemento){
    return lista.filter(
        item => 
        item === elemento
    );
}

export function listaMayorALista(listaA = [], listaB = []){
    return listaA.length > listaB.length;
}

export function listaMayorCantidadRepeticion(listaA = [], listaB = [], elemento){
    return contarRepeticion(listaA, elemento) > contarRepeticion(listaB, elemento);
}

export function listaMayorRepeticion(listaA = [], listaB = []){
    // EJ: A=[1,2,2,3,3,5] & B=[1,2,3,3,3] --> Resultante = [1,2,2,3,3,3,5]
    let listaRetorno = [...listaB];
    listaA.forEach(itemA => {
        if(listaB.includes(itemA)){
            if(listaMayorCantidadRepeticion(listaA, listaRetorno, itemA)){
                listaRetorno.push(itemA);
            }
        } else listaRetorno.push(itemA);
    });
    return listaRetorno;
}

// ----------------------------------------------------------------------------------
// ----------------------- OTROS

export function longitudLista(lista = []){
    return lista.lenght;
}