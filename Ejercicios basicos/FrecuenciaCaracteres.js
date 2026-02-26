import { 
    contarRepeticion 
} from "../Auxiliares/matematicas/operacionesListas.js";

function encontrarRepetidos(cadena = ""){
    let listadoClaveValor = [];
    let nuevaLista = [...cadena.toLowerCase().replaceAll(" ", "")];

    nuevaLista.forEach(item => {
        let verificarInclusion = listadoClaveValor.some(obj => obj.car === item);
        if(!verificarInclusion){
            let vecesRepetido = contarRepeticion(nuevaLista, item);
            listadoClaveValor.push(
                {car: `${item}`, veces: vecesRepetido}
            );
        }
    });

    return listadoClaveValor;
}

console.log(encontrarRepetidos("Hoy ya es dia 10"));
