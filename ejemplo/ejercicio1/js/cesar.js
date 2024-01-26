console.log("cesar.js cargado")


function cifrarCesar(texto) {
    var desplazamiento = 10;
    texto = texto.toUpperCase();
    var textoCifrado = "";
    var posicion = 0;
    var posicionCifrada = 0;
    var letraCifrada = "";
    var diccionario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ,.0123456789ÑÇ";
    for (var i = 0; i < texto.length; i++) {
        letra = texto[i];
        posicion = diccionario.indexOf(letra)
        posicionCifrada = posicion + desplazamiento;
        if (posicionCifrada > diccionario.length-1) {
            posicionCifrada = 0;
        }
        letraCifrada = diccionario[posicionCifrada];
        textoCifrado =textoCifrado +  letraCifrada;
    }
    return textoCifrado;
}

function descifrarCesar(texto) {
    var desplazamiento = 10;
    texto = texto.toUpperCase();
    var textoDescifrado = "";
    var posicion = 0;
    var posicionDescifrada = 0;
    var letraDescifrada = "";
    var diccionario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ,.0123456789ÑÇ";

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

console.log(cifrarCesar("HOLA."))
console.log(descifrarCesar("IPMBa"))






function apretarbotonencripta(){
    //recuperar lo que hay en el input
    var elemtexto = document.querySelector("#textenc");
    var texto = elemtexto.value;
//calcular lo que sea
    var res = cifrarCesar(texto);   

    //pintar resultado
    var parraf = document.querySelector("#resultadoenc");
    
    parraf.innerHTML=res;


}

var boton = document.querySelector("#encripta");
boton.addEventListener("mouseover",apretarbotonencripta);




function apretarbotondesencripta(){
    //recuperar lo que hay en el input
    var elemtexto = document.querySelector("#textdes");
    var texto = elemtexto.value;
//calcular lo que sea
    var res = descifrarCesar(texto);   

    //pintar resultado
    var parraf = document.querySelector("#resultadodes  ");
    
    parraf.innerHTML=res;


}

var botondesc = document.querySelector("#desencripta");
botondesc.addEventListener("click",apretarbotondesencripta);