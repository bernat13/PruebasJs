console.log("cesar.js cargado")
var desplazamiento = 1

function cifrarCesar(texto, desplazamiento) {
    texto = texto.toUpperCase();
    var textoCifrado = "";
    var posicion = 0;
    var posicionCifrada = 0;
    var letraCifrada = "";
    var diccionario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ,.";
    for (var i = 0; i < texto.length; i++) {
        letra = texto[i];
        posicion = diccionario.indexOf(letra)
        posicionCifrada = posicion + desplazamiento;
        if (posicionCifrada > diccionario.length-1) {
            posicionCifrada = 0;
        }
        letraCifrada = diccionario[posicionCifrada];
        textoCifrado += letraCifrada;
    }
    return textoCifrado;
}

function descifrarCesar(texto, desplazamiento) {
    texto = texto.toUpperCase();
    var textoDescifrado = "";
    var posicion = 0;
    var posicionDescifrada = 0;
    var letraDescifrada = "";
    var diccionario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ,.";

    for (var i = 0; i < texto.length; i++) {
        letra = texto[i];
        posicion = diccionario.indexOf(letra)
        posicionDescifrada = posicion - desplazamiento;
        if (posicionDescifrada < 0) {
            posicionDescifrada = diccionario.length-1;
        }
        letraDescifrada = diccionario[posicionDescifrada];
        textoDescifrado += letraDescifrada;
    }
    return textoDescifrado;
}

console.log(cifrarCesar("HOLA.", desplazamiento))
console.log(descifrarCesar("IPMBa", desplazamiento))