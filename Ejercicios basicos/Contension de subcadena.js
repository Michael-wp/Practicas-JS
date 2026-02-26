// En este reto debes diseñar una función que recibe como argumento dos cadenas de caracteres, llamemoslas:: muestra y palabra, deberá encontrar la menor subcadena de palabra que contiene todos los caracteres de muestra. No se considera el orden de las letras, solo que esten contenidas en la subcadena. Si se consideran las repeticiones: si busca taza no vale encontrar tza
// En el caso de que no se tenga la subcadena muestra se devolvera false.
// Un ejemplo:

// cadMinima('nasa', 'antesala')

// Devolverá antesa, es la menor subcadena que contiene nasa

// Si hay mas de una posible salida devuelve la primera que encuentre

// cadMinima('nesa', 'antesala')

// Puede devolver  antes y ntesa, devolverá antes

function subCade(muestra, palabra){
    let posiciones = [];
    let aux = 0;
    if(existe(muestra, palabra)){
        for(let i = 0; i < muestra.length; i++){
            posiciones.push(palabra.indexOf(muestra[i], aux));
            aux++;
        }
        let max = Math.max(...posiciones);
        let final = palabra.substring(0, max +1);
        return final;
    }
    else{
        return false
    }
}


function existe(muestra, palabra){
    let lenMuestra = muestra.length;
    //let lenPalabra = palabra.length;
    let aux = 0;
    for(let i = 0; i < lenMuestra; i++){
        if(palabra.includes(muestra[i])) aux++;
    }
    if(aux === lenMuestra) return true;
}





console.log(subCade("nasa", "antesala"));
console.log(subCade("maza", "manzaba"));
console.log(subCade("herreria", "libreria"));
console.log(subCade("cebra", "celebrar"));

















