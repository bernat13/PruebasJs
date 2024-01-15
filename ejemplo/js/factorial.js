function factorial(num) {
    if (num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}

var n = prompt("Introduce un numero para calcular el factorial: ")
console.log(" el factorial de " + n + " es : " + factorial(n));


var nombre = prompt(" dime tu nombre");
console.log("HOLA " + nombre);


/*
1.- Haced un javascript que te pregunte el nombre y el año de nacimiento
        y te salude y te diga tu edad


2.- Añadir un mensaje que diga tu nombre y el número de caracteres que tiene tu nombre.

*/