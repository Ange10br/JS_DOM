/* Seleccionar elementos */

    //querySelector
        //Retorna ninguno o hasta 1 elemento que concuerde con el selector escrito y son similares a los selectores ya sea inicializando con . o #

const heading = document.querySelector('#heading'); //Retorna 0 o maximo 1 elemento

console.log(heading);

heading.textContent = 'Nuevo Heading';  //Modificar texto del elemento

heading.classList.add('nueva-clase');   //Añadir clases

heading.classList.remove('nueva-clase'); //Eliminar clases

    //querySelectorAll
        //A diferencia de querySelector que retorna 0 o 1 elemento querySelectorAll retorna 0 o todos los elementos que concuerden con el selector tipo css que se le de
const enlaces = document.querySelectorAll('.navegacion a'); //Retorna todos los que concuerden con el selector
console.log(enlaces);

enlaces[0]; //Llama al elemento con el indice 0 de todos los elemento seleccionados



    //getElementById

const heading2 = document.getElementById('heading')


/* Crear elemento HTML con js */

const nuevoEnlace = document.createElement('A');

    //Agregarle contenido

nuevoEnlace.textContent = 'Nuevo Enlace';       //Le indica el texto que contiene la etiqueta creada

    //href

nuevoEnlace.href = 'nuevo-enlace.html';  //Le indica a donde va a enlazar al hacerle click

    //agregar clase

nuevoEnlace.classList.add('navegacion__enlace');    //Le da la clase misma que con el codigo css le va a dar estilos




    //Agregarlo al documento

const navegacion = document.querySelector('.navegacion');  //Llama al primer elemento con la clase .navegacion que encuentre y lo llama

navegacion.appendChild(nuevoEnlace);                    //Agrega el nuevo enlace dentro del elemento navegacion