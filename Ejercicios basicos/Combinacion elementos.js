// Se trata de crear un script que a partir de una cadena de cracteres genere todas las combinaciones de n caracteres que puedan formarse con las letras de una cadena de caracteres.

// Una combinación  es un grupo con una parte de las letras de la cadena.

// La función recibe dos argumentos: una string con la lista de caracteres y un número para indicar el ancho de las combinaciones.

// En las combinaciones generadas no importa el orden en que se coloquen los caracteres. Es decir que acd es lo mismo que cda.

function mezclarSimple(lista){
    let listaNueva = lista.sort(() => Math.random() - 0.5);
    return listaNueva;
}


function combinaciones(cadena, num){
    let lista = cadena.split("");
    let listaCombinaciones = [];
    let listaFinal = [];
    for(let i = 0; lista.length > i; i++){
        let j = 0;
        while(j < lista.length){
            let cade = mezclarSimple(lista).join("");
            if(listaCombinaciones.includes(cade)){
                j++;
            }
            else{
                listaCombinaciones.push(cade);
                j=0;
            }

            if(cade.length >= num){
                let sub = cade.substring(0, num);

                if(!listaFinal.includes(sub)){
                    listaFinal.push(sub);
                }
            }
        }


    }

    

    return listaFinal.join("-");
}




//Ejemplo:
console.log(combinaciones("abcd", 3));
console.log(combinaciones("abcde", 3));
console.log(combinaciones("abcdef", 3));



















