// Se trata de crear una función que coja una cadena de cracteres y genere todas las combinaciones posibles con todos ellos.

// Una permutación es la combinación ordenada de todos los caracteres de la codena.

// La función recibe un solo argumento: una string con la lista de caracteres.

// En las permutacinoes importa el orden en que se coloquen los caracteres. Es decir que acd no es lo mismo que cda.


function mezclarSimple(lista){
    let listaNueva = lista.sort(() => Math.random() - 0.5);
    return listaNueva;
}


function permutacion(cadena){
    let lista = cadena.split("");
    let listaFinal = [];
    for(let i = 0; lista.length > i; i++){
        let j = 0;
        while(j < lista.length){
            let cade = mezclarSimple(lista).join("");
            if(listaFinal.includes(cade)){
                j++;
            }
            else{
                listaFinal.push(cade);
                j=0;
            }
        }

    }
  

    return listaFinal.sort().join("-");
}





//Ejemplos:
console.log(permutacion("abc"));
console.log(permutacion("asbc"));
console.log(permutacion("asbnc"));




