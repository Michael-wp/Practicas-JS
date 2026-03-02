// diseñar una función que comrpueba si un array está ordenado en orden ascendente de sus componentes, es decir, que cada elemento es superior o igual al anterior e inferior o igual al siguiente, o si solo tiene un elemento

// La función tiene como único argumento la lista a comprobar y devolverá true si está ordenada o false en caso contrario.

function ordenAsc(lista){
    for(let i = 0; i < lista.length;i++){
        if(i == 0){
            continue;
        }
        else if ((lista[i] - lista[i-1]) > 0){
            continue;
        }
        else if ((lista[i] - lista[i-1]) <= 0){
            return false;
        }
    }

    return true;
}

function estaOrdenadoAsc(lista) {
  return lista.every((valor, i) => 
    i === 0 || lista[i - 1] <= valor
  );
}

//Ejemplos
console.log(ordenAsc([1,2,3,6,7,19]));
console.log(ordenAsc([12,2,9,6,7,19])); 
console.log(ordenAsc([4])); 

console.log(estaOrdenadoAsc([1,2,3,6,7,19])); 
console.log(estaOrdenadoAsc([12,2,9,6,7,19]));
console.log(estaOrdenadoAsc([4])); 