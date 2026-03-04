// Crea una función que sea capa de determinar si dos palabras y determine sin son anagramas la una de la otra.

// Recuerda: dos palabras diferentes que contienen las mismas letras son anagramas.

// Dos palabras iguales no son anagramas.

// No se consideran espacios en blanco. Se acepta que solo se pasan a la función palabras completas.

function esAnagrama0(p1, p2){ //Menos eficiente, la logica recae en la repeticion de caracteres
    let aux = 0;
    if(p1.length === p2.length && !p1.includes(p2)){
        for(let i = 0; i < p1.length; i++){
            if(p1.includes(p2[i])) aux++;
        }
    }

    return aux === p1.length;
}

function esAnagrama(p1, p2){ //Mas eficiente
    if(p1 === p2) return false;
    if(p1.length != p2.length) return false;

    let ordenoP1 = p1.split("").sort().join("");
    let ordenoP2 = p2.split("").sort().join("");
    
    return ordenoP1 === ordenoP2;   
}

//Ejemplos:
console.log(esAnagrama("amor", "roma"))  //-> True
console.log(esAnagrama("rota", "otra"))  //-> True
console.log(esAnagrama("otra", "otra"))  //-> false













