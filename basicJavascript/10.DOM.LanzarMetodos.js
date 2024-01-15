// para lanzar métodos JS desde el DOM, podemos usar el evento onclick, por ejemplo:

<button id="id" onclick="alert('Hola')">Hola</button>
// esto mostrará un alert con el texto Hola


// o podemos hacer que un botón cambie de color al hacer click, por ejemplo:

function cambiarColor() {
    var element = document.getquerySelector('#id');
    element.style.backgroundColor = 'red';
}


// y en el HTML:

//<button id="id" onclick="cambiarColor()">Hola</button>


// esto hará que el botón cambie de color al hacer click


// Para enlazar un evento a un elemento del DOM, podemos usar el método addEventListener, por ejemplo:

// en el HTML
<button id="id">Hola</button>


// en el JS:
var element = document.getquerySelector('#id');

element.addEventListener('click', function() {

    alert('Hola');

});


// Es importante que TODO el JS esté dentro de un fichero JS, y que NO haya código JS en el HTML.

