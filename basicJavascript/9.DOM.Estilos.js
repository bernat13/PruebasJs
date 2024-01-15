

//También podemos cambiar las propiedades CSS de un elemento del DOM, por ejemplo:

<p id="id">Hola</p>

var element = document.getquerySelector('#id');

element.style.color = 'red';

// esto valdrá

// <p id="id" style="color: red;">Hola</p>

// o añadir una clase a un elemento del DOM, por ejemplo:

<p id="id">Hola</p>

var element = document.getquerySelector('#id');

element.classList.add('class');

// esto valdrá

// <p id="id" class="class">Hola</p>
