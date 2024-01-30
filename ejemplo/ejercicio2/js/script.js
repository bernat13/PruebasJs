console.log("arrancandoscript...")
var  x = 200;

document.addEventListener("keydown", function(e){
console.log(e.key);

if (e.key=="ArrowRight")
{
    var div = document.querySelector("div");
    x = x + 10;
    div.style.left=x+ "px"

}

if (e.key=="ArrowLeft")
{
    var div = document.querySelector("div");
    x = x - 10;
    div.style.left=x+ "px"

}


});