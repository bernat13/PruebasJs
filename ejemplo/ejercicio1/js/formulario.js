console.log("formulario.js cargado")

//dia de hoy
var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var anyo = fecha.getFullYear();

console.log(dia + "/" + mes + "/" + anyo);




function validarDNI(dni) {
    var numero
    var letr
    var letra
    numero = dni.substr(0, dni.length - 1);
    letr = dni.substr(dni.length - 1, 1);
    numero = numero % 23;
    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
    letra = letra.substring(numero, numero + 1);
    console.log(letra)
    if (letra != letr.toUpperCase()) {
        console.log('Dni erroneo, la letra del NIF no se corresponde');
        return false;
    } else {
        console.log('Dni correcto');
        return true;
    }
}

function calculaEdad(dia, mes, anyo) {
    var edad;
    var fecha = new Date();
    var diah = fecha.getDate();
    var mesh = fecha.getMonth() + 1;
    var anyoh = fecha.getFullYear();

    edad = anyoh - anyo;
    if (mesh > mes)
        edad++;
    else if (mesh == mes) {
        if (diah > dia)
            edad++;
    }
    return edad;
}

function apretarboton() {

    // vamos a validar el dni
    var dni = document.querySelector("#dni").value;
    var resdni = document.querySelector("#resdni")
    if (validarDNI(dni)) {
        resdni.innerHTML = "DNI Correcto"
        resdni.style.color = "green";
        //mostrar mensaje true
    }
    else {
        resdni.innerHTML = "DNI FALSO"
        resdni.style.color = "red";
        // mostrar error
    }

    var pass = document.querySelector("#pass").value;
    var respass = document.querySelector("#respass")
    if(pass.length<8){
            respass.innerHTML="El password es demasiado corto"
            respass.style.color="red";
    }
    else{
        respass.innerHTML=""
    }


}

var boton = document.querySelector("#boton");

boton.addEventListener("click", apretarboton);