function esApertura(objecto, item){
    return Object.hasOwn(objecto, item);
}

function coincideConCierre(objecto, apertura, item){
    return objecto[apertura] === item;
}

function verificarAperturaYCierre(cadena = ""){
    let cierres = ["]", ")", "}"];
    let combinaciones = {
        "[":"]",
        "(":")",
        "{":"}"
    };
    let pila = [];

    if(cadena.length === 0) return 0;

    for(let i = 0; i < cadena.length; i++){
        let caracter = cadena[i];

        if(esApertura(combinaciones, caracter)){
            pila.push(caracter);
        } else if(cierres.includes(caracter)){
            if(pila.length === 0) return i;
            
            let apertura = pila[pila.length - 1];
            
                if(coincideConCierre(combinaciones, apertura, caracter)){
                    pila.pop();
            } else return i;
        }
    };

    return pila.length === 0 ? -1 : cadena.length-1;

}

console.log(verificarAperturaYCierre("[5+y(3+1)()]+++{}"));