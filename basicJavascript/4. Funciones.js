// Para hacer una funcion, podemos usar function


function factorial(num) {
    var ret = 1;
    while (num>0){
        ret = ret * num;
        num--;
    }    
    return ret;
}

//Para llamar a una funcion, podemos usar el nombre de la funcion y los parametros que necesite

var n = prompt("Introduce un numero para calcular el factorial: ");
console.log(" el factorial de " + n + " es :",factorial(n));
