console.log("factorial.js cargado")

function factorial(n) { 
    var ret =1;
    for (var i = 1; i <= n; i++) {
        ret =ret * i;
    }
    return ret;
}


console.log(factorial(5))