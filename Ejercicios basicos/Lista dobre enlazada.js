// Se trata de construir una lista doblemente enlazada.

// Una lista enlazada doble es una estrucutra de datos que consiste en una serie de elementos (nodos) con dos punteros: uno apunta al nodo anterior y otro al nodo siguiente, excepto el primero y el último.

// El primier nodo solo apunta al siguiente (el anterior no existe) y el último solo apunta al anterior (el siguiente no existe).

// Cada nodo tiene además un valor. En este reto los valores deben ser únicos, no se pueden repetir.

// La lista tendrá los siguientes métodos:

// agregar(valor): añade un valor al final de la lista
// borrarValor(valor): elmina un nodo de la lista identficado por su valor.
// borrar(): elimina últmo nodo
// existe(valor): indica si un valor existe en la lista
// iterarDir(): muestra los valores almacenados en la lista del primero al último
// iterarRev(): muestra los valores de la lista desde el último al primero


//Incompleto


let nodoA = {nombre: "nodoA", valor: 1, siguiente: nodoB, anterior: null};
let nodoB = {nombre: "nodoB", valor: 2, siguiente: nodoC, anterior: nodoA};
let nodoC = {nombre: "nodoC", valor: 3, siguiente: nodoD, anterior: nodoB};
let nodoD = {nombre: "nodoD", valor: 4, siguiente: nodoE, anterior: nodoC};
let nodoE = {nombre: "nodoE", valor: 5, siguiente: null, anterior: nodoD};

let listaObj = [nodoA, nodoB, nodoC, nodoD, nodoE];

function agregar(valor, lista){
    lista.push(valor);
}

function borrarValor(valor, lista){


}

function borrar(lista){
    lista.pop();
}

function existe(valor, lista){

}

function iterarDir(lista){

}

function iterarRev(lista){

}





















