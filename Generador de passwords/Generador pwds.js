// En este reto se trata de que crees un script para generar passwords.

// Las passwords deben estar tener una longitud comprendedas entre 87 y 15 caracteres. Estos caracteres deberán tener al menos una letra mayúscula, otra minúscula, un dígito y un caracter especial

// Los caracteres especiales serán  uno de estos:
//   ! @ # $ % & * ? + = - /



function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function makePsswd(){
    let longitud = RandomNumber(15, 87);
    let abcdario = "abcdefghijklmnñopqrstuvwxyzABCCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let cEspeciales = "!@#$%&*?+=-/";
    let lista = [];
    
    for(let i = 0; i < longitud; i++){
        if(Math.random() < 0.5){
            lista.push(cEspeciales[RandomNumber(0, cEspeciales.length -1)]);            
        }
        else{
            lista.push(abcdario[RandomNumber(0, abcdario.length -1)]);
        }
    }

    return lista.join("");
}


console.log(makePsswd());










