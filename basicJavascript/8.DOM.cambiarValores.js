// para cambiar valores de un elemento del DOM, podemos usar las siguientes propiedades:

// innerHTML, por ejemplo, si tenemos 
<p id="id">Hola</p>

// podemos cambiar su valor con:
var element = document.getquerySelector('#id');
element.innerHTML = 'Adios';

//podemos acceder al texto de un elemento con la propiedad innerText, por ejemplo:
<p id="id">Hola <strong>mundo</strong></p>
var element = document.getquerySelector('#id');

console.log(element.innerText); // Hola mundo

// esto valdrá

// Hola <strong>mundo</strong>



// Para acceder al valor de un input, podemos usar la propiedad value, por ejemplo:

<input id="id" value="Hola" />

var element = document.getquerySelector('#id');

console.log(element.value); // Hola

// podemos cambiar el valor de un input con la propiedad value, por ejemplo:

<input id="id" value="Hola" />

var element = document.getquerySelector('#id');

element.value = 'Adios';

// esto valdrá

// <input id="id" value="Adios" />
