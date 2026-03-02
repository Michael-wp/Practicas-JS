// Debes diseñar una función de encriptado que reciba una frase la codifica con el algoritmo de César, que consiste en substituir cada letra por otra obtenida desplazando la posición de la actual un determinado número de posiciones dentro del abecedario. Ese desplazamiento es la clave del cifrado

// Si al desplazar la letra actual llegamos a la posición 0, seguimos por la última letra del afabeto.

// La función cifrar(frase, clave) lleva dos argumentos el primero la frase a cifrar y el segundo la clave. Debe devolver la frase cifrada.

// Se acepta que todas las frases deberán ir en minúsculas.

// Para comprobar el funcionamiento debieras crear la función descifrar()




function cifrar(palabra, clave){
    let abcdario = "abcdefghijklmnñopqrstuvwxyz";
    let cifrado = "";

    for(let i = 0; i < palabra.length; i++){
        let posicion = abcdario.indexOf(palabra[i]);
        let posicionClave = posicion - clave;
        if(palabra[i] == " "){
            cifrado += " ";
        }
        else if(posicionClave < 0){
            cifrado += abcdario[27 + posicionClave];
        }
        else{
            cifrado += abcdario[posicionClave];
        }

        
    }
    
    return cifrado;
}


function descifrar(palabra, clave){
    let abcdario = "abcdefghijklmnñopqrstuvwxyz";
    let cifrado = "";

    for(let i = 0; i < palabra.length; i++){
        let posicion = abcdario.indexOf(palabra[i]);
        let posicionClave = posicion + clave;
        
        if(palabra[i] == " "){
            cifrado += " ";
        }
        else if(posicionClave > 26){
            cifrado += abcdario[posicionClave - 27];

        }
        else{
            cifrado += abcdario[posicionClave];
        }


    }
    return cifrado
}

//Ejemplos: Cifrado y desifrado
console.log(cifrar("casa blanca", 3));
console.log(cifrar("hola", 3));

console.log(descifrar("zxpx yixkzx", 3));
console.log(descifrar("emix", 3));





