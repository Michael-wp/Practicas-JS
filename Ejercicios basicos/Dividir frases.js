//Desarrolladores: Michael Galeano u Alex Urquiza
// En este reto se plantea una función que recibe una frase y un valor numérico. La frase debe romperse en segmentos de longitud lo más próxima al valor numérico, pero no deben usarse guiones, cada segmento debe contner solo palabras completas. No se pueden partir las palabras. Se supone que ninguna palabra es mayor que el ancho máximo
// "Hoy es un día de suerte para todos"
// Partir en trozos de 7 caracteres
// 'Hoy es', 'un día', 'de', 'suerte', 'para', 'todos'


function divFrases(cadena, longitud){
    let lista = cadena.split(/\s+/);
    let listaFinal = [];
    let aux = 0;
   
    listaFinal.push(lista[0]);

    for(let i = 1; i < lista.length; i++){
        if ((listaFinal[aux].length + lista[i].length +1) <= longitud){
            listaFinal[aux] += " " + lista[i];
        }
        else{
            listaFinal.push(lista[i]);
            aux++;
        }
    }

    return listaFinal.join(",");
}

//ejemplo
console.log(divFrases("Hola todo el mundo, tomen agua", 9));



















