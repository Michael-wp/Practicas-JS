// Se trata de encontrar una función que reciba una expresión literal conteniendo signos de agrupamiento como paréntesis, corchetes y llaves. La función debe analizar el literal y comprobar que todos los signos están correctamente emparejados y anidados.

// La función devolverá -1 si todo es correto y un número indicando la posición en la que ha encontrado el error de anidamieto o cierre.



function simbEquilibrados(cadena){
    let inicios = ["{", "[", "("];
    let finales = ["}", "]", ")"];
    let objeto = {};

    [...cadena].forEach( carac => {
        ((carac in objeto)) ? objeto[carac]++ :objeto[carac] = 1;
    });

    if(("{" in objeto) && objeto["{"] === objeto["}"]){
        return true;
    }
    if(("[" in objeto) && objeto["["] === objeto["]"]){
        return true;
    }
    if(("(" in objeto) && objeto["("] === objeto[")"]){
        return true;
    }
    if(("}" in objeto) && objeto["{"] === objeto["}"]){
        return true;
    }
    if(("]" in objeto) && objeto["["] === objeto["]"]){
        return true;
    }
    if((")" in objeto) && objeto["("] === objeto[")"]){
        return true;
    }
    
    return -1;
}





console.log(simbEquilibrados("[1+x+3*(y-5)"));











