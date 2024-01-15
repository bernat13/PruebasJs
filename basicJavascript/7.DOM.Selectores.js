// ¿Que es el DOM?
//
// El DOM es un modelo de objetos que representa a todos los elementos de una página web.
//

// para acceder al DOM, usamos el objeto global "document"

// document es un objeto que representa a toda la página web

// podemos acceder a todos los elementos de la página web a través de document

// podemos acceder a los elementos de la página web a través de su id, por ejemplo:

var element = document.getElementById('id');

// podemos acceder a los elementos de la página web a través de su clase, por ejemplo:

var elements = document.getElementsByClassName('class');

// podemos acceder a los elementos de la página web a través de su etiqueta, por ejemplo:

var elements = document.getElementsByTagName('p');

// podemos acceder a los elementos de la página web a través de su selector css, por ejemplo:

var elements = document.querySelectorAll('#id');

// podemos acceder a los elementos de la página web a través de su selector css, por ejemplo:

var element = document.querySelector('#id');

// que diferencia hay entre querySelector y querySelectorAll?

// querySelector devuelve el primer elemento que cumpla con el selector css
// querySelectorAll devuelve un array con todos los elementos que cumplan con el selector css

// para acceder a los elementos de querySelectorAll, podemos usar el indice del array, por ejemplo:

var elements = document.querySelectorAll('#id');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
}
