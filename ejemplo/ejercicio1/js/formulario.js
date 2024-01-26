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
        if (letra != letr.toUpperCase()) {
            console.log('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        } else {
            console.log('Dni correcto');
            return true;
        }
}

function calculaEdad(dia, mes, anyo) {
    var edad = 0;
    return edad;
}