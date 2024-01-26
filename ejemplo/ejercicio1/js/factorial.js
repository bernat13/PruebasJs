console.log("factorial.js cargado")

function factorial(n) { 
    var ret =1;
    for (var i = 1; i <= n; i++) {
        ret =ret * i;
    }
    return ret;
}


function apretarboton(){
    //recuperar lo que hay en el input
    var elemnumero = document.querySelector("#numero");
    var num = elemnumero.value;
//calcular lo que sea
    var res = factorial(num);   

    //pintar resultado
    var parraf = document.querySelector("#resultado");
    
    parraf.innerHTML="<h2>El resultado es " + res+ "</h2>";


}

var boton = document.querySelector("#boton");
boton.addEventListener("click",apretarboton);