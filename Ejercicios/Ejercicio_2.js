
// En este reto se trata de reordenar un array de forma aleatoria. Tienes una array de números [1,2,3,4,5] sin un orden especial y quieres reordenarlo también de forma aleatoria [5,3,1,2,4] o [3,4,1,5,2]. 
// O sea, realmente se trata de desordenar la lista. 
// Puedes usar los métodos del objeto array


let lista = [1, 2, 3, 4, 5,  7, 9, 0];

function reDesorden(array){
    return array.sort((a, b) => Math.random() >= 0.5 ? -1 : 1);

}

console.log(reDesorden(lista));

































