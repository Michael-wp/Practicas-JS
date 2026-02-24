// ----------------------- IMPORTACIONES
import {
    multiplicarLista,
    listaMayorRepeticion
    } from '../Auxiliares/matematicas/operacionesListas.js';


import { 
    descomponerNumero
    } from '../Auxiliares/matematicas/operacionesNumeros.js';

// --------------------------------------------------------------------------------------------
// ----------------------- DESARROLLO DEL SCRIPT

function mcm(valorUno, valorDos){
    let descompuestoA = descomponerNumero(valorUno);
    let descompuestoB = descomponerNumero(valorDos);

    let listaCalcular = listaMayorRepeticion(descompuestoA, descompuestoB);
    let mcmValue = multiplicarLista(listaCalcular);

    console.log("Números que conforman el mcm:\n", listaCalcular);    
    console.log("El mcm es: ", mcmValue);
}

mcm(180, 324);
