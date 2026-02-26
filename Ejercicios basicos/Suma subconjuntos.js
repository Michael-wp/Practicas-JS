function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

function sumSubconjuntos(lista, num){
    if(lista.length === 0){
        return false;
    }
    else if(lista.includes(num)){
        return true;
    }
    let ultimo = lista.pop();
    if(num > ultimo ){
        return sumSubconjuntos(lista, num - ultimo);
    }
    else{
        return sumSubconjuntos(lista, num);
    }
    
}

console.log(sumSubconjuntos([3,4,2,8,7], 6));





