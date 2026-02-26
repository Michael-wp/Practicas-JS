// Diseña una función que reciba como argumento una lista de números enteros. El script devolcerá una lista con los mismos valores pero insertando un 0 después de cada número par de la lista

// Si la lista está vacía devolverá un array vacío. No debe modificar la lista array original.




function insertCeros(lista){
    let listaNueva = [];
    lista.forEach(element => {
        if(esPar(element)){
            listaNueva.push(element);
            listaNueva.push(0);
        }
        else{
            listaNueva.push(element);
        }
    });

    return listaNueva;
}


function esPar(num){
    return num % 2 === 0;
}



console.log(insertCeros([2,4,5,7]));
console.log(insertCeros([1,4,7,8]));













