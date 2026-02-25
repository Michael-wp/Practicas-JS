const puntosCartesianos = [
    {x: 1, y: 2},
    {x: 1, y: 8},
    {x: 6, y: 2},
    {x: 6, y: 8}
];

function ordenarCoordenadas(coordenadas){
    return {
        minX: Math.min(...coordenadas.map(p => p.x)),
        maxX: Math.max(...coordenadas.map(p => p.x)),
        minY: Math.min(...coordenadas.map(p => p.y)),
        maxY: Math.max(...coordenadas.map(p => p.y))
    };
}

function areaRectangulo(coordenadas){
    const { minX, maxX, minY, maxY } = ordenarCoordenadas(coordenadas);
    let base = maxX - minX;
    let altura = maxY - minY;
    let valorArea = base*altura;
    return valorArea;
}

console.log(areaRectangulo(puntosCartesianos));