let inputSearch = document.querySelector('input');
 
function buscarEnTablaHTML(){
    let flag = existeEnTablaHTML();
    if(flag) console.log("Encontro el nombre");
    else console.log("No se encuentra");
}

function existeEnTablaHTML(){
    let tr = document.querySelectorAll('tbody tr');
    let valorEntranteACompararTest = "28"; // Borrar luego y reemplazar por input

    return [...tr].some(fila => {
        console.log(fila.children[0].textContent)
        return fila.children[1].textContent === "28";
    });
}

// como le digo, ey encontraste esto en tal fila, devolve esa fila.
// Ya sea encontrado por el nombre, edad o ciudad. Deberia devolver entonces
// el index de esa fila? como retorno este index usando some. Ya no devuelvo
// un true, es si flag recibe un numero != -1 ese numero es la fila a retornar
// por coincidencia en la tabla. O las filas.
// Pero si son varias filas las que coinciden? veamos usar un filter


// Funcion anterior
// function existeEnTablaHTML(){
//     let tr = document.querySelectorAll('tbody tr');
//     let valorEntranteACompararTest = "28"; // Borrar luego y reemplazar por input

//     for(let i = 0; i < tr.length; i++){
//         let fila = tr[i].children;
//         for(let r = 0; r < fila.length; r++) {
//             let celda = fila[r].textContent;
//             if(celda === valorEntranteACompararTest){
//                 return true;
//             }
//         }

//     }
// }

buscarEnTablaHTML();
