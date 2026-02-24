
function mcm(a = [], b = []){
    let valoresA = descomponerNumero(a);
    let valoresB = descomponerNumero(b);

    let listaCalcular = retornarCoincidentes(valoresA, valoresB);

    console.log("El listado es: ", listaCalcular);
    let producto = listaCalcular.reduce((acum, valAct) => acum*valAct, 1);
    console.log(producto);
}

function descomponerNumero(numero){
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

function retornarCoincidentes(listaA, listaB){
    let listadoAUsar = [];
    let listadoRetornar = [];
    let listadoNoUsado = [];
    let filtrarListadoNoUsadoRepetidos = [];
    let filtrarListadoUsado = [];

    if(listaA.length > listaB.length){
        listadoAUsar = listaA;
        listadoNoUsado = listaB;
    } else {
        listadoAUsar = listaB;
        listadoNoUsado = listaA;
    }   
    // [2,2,5,3,3] vs [2,2,3,3,3,3] --> Me quedo con [2,2,3,3,3]
    
    listadoRetornar = [...listadoAUsar];
    [...listadoAUsar].forEach(itemList => {

        if(listadoNoUsado.includes(itemList)){
            filtrarListadoNoUsadoRepetidos = listadoNoUsado.filter(itemNoUsado => itemNoUsado === itemList);
            filtrarListadoUsado = listadoRetornar.filter(itemUse => itemUse === itemList);

            listadoNoUsado.forEach(itemAux => {
                if(!listadoRetornar.includes(itemAux)){
                    listadoRetornar.push(itemAux)
                }
            })

            while(filtrarListadoNoUsadoRepetidos.length > filtrarListadoUsado.length){
                filtrarListadoUsado.push(itemList);
                listadoRetornar.push(itemList);
            }

        }
    });
    //[2,2,5,3,3] tomo el 5 y lo agrego al usado. Ademas, agrego los repetidos.

    return listadoRetornar;
}

mcm(180, 324);
