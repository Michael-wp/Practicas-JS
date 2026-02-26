
function calculadora(valor1, valor2, sign){
    if(sign === "+"){ 
        return valor1 + valor2;
    }
    else if(sign === "-"){
        return valor1 - valor2;
    }
    else if(sign === "*"){
        return valor1 * valor2;
    }
    else if(sign === "/"){
        return valor1 / valor2;
    }
    else if(sign === "%"){
        return valor1 % valor2;
    }
    else if(sign === "**"){
        return valor1 ** valor2;
    }
    else{
        return null;
    }

}


console.log(calculadora(1, 2, "+"));
console.log(calculadora(1, 2, "-"));
console.log(calculadora(1, 2, "*"));
console.log(calculadora(1, 2, "/"));















