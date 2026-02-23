let inputSearch = document.querySelector('input');
inputSearch.addEventListener('input', () => {
    filtrarFilas();
});

function filtrarFilas(){
    let tr = document.querySelectorAll('tbody tr');
    let readingInput = inputSearch.value.toLowerCase();
    let flag = false;
    
    [...tr].forEach(fila => {
        flag = [...fila.children].some(celda => {
            return celda.textContent.toLowerCase().startsWith(readingInput);
        })
        alterarTablas(fila, flag);
    });
}

function alterarTablas(fila, flag){
    fila.style.display = flag ? "" : "none";
}
