//*Objetos: son estructuras armadas por PROPIEDADES que almacenan VALORES. 

const verduras = ["zanahoria","tomate","lechuga"]
verduras[1]

const formulario = {
    nombre:"Sebastian", 
    ciudad:"Mar del plata",
    profesion: "Programador",
    edad:36, 
}

//*Accederemos a los VALORES  de las PROPIEDADES, de las siguientes maneras:
//? metodo 1: DOT NOTATION (A TRAVES DEL PUNTO)
formulario.profesion

//? metodo 2: BRACKET NOTATION (a traves de CORCHETES). La propiedad que buscaremos debe ir como STRING
formulario["edad"]

//* En los objetos, tambien podemos tener diferentes tipos de PROPIEDADES. Esto significa, que no siempre, el objeto, tendra como propiedad, caracteres alfabeticos! Incluso podremos ver, numeros.

const jugadores = { 
    1: "Emiliano Martinez",
    4: "Cristian Romero",
    5: "Leandro Paredes",
    7: "Rodrigo De Paul",
    10: "Lionel Messi",
    11: "Angel Di Maria",
    "D.T": "Lionel Scaloni"
}

jugadores["D.T"]

//*Como podemos agregar una propiedad a un Objeto?

//Para esto, simplemente, llamaremos al objeto,y crearemos su propiedad, desde el propio llamado de la propiedad, y le pasamos el valor
jugadores[9] = "Julian Alvarez"

jugadores.ayudante = "Walter Samuel"

jugadores[9]

jugadores

//*Crearemos un objeto desde la pantalla del PROMPT de nuestro navegador

const test = {}


//! IMPORTANTE: para crear objetos con propiedades que seran DEFINIDAS por el usuario,usemos BRACKET NOTATION, y dentro del objeto, indiquemos LA VARIABLE que va a ser la que dara el nombre a la PROPIEDAD

// for (let i = 0; i < 4; i++) {
//     const propiedad = prompt("Indique el nombre de la propiedad:")
//     const valor = prompt("Indique el valor de la propiedad:")
//     test[propiedad] = valor
//     console.log(test);
// }

//*Metodos para OBJETOS: los objetos creados, no tienen en si mismos, METODOS ASOCIADOS, sino que los metodos provienen de la CLASE Object

//keys, nos permite visualizar un ARRAY con todas las PROPIEDADES
const llaves = Object.keys(formulario)
llaves
//values, nos permite visualizar un ARRAY con los valores de TODAS LAS PROPIEDADES
const valores = Object.values(formulario)
valores
//entries, nos devuelve un array, en en cual, en cada indice, SE ENCUENTRA UN ARRAY CON propiedad y valor
const mis_datos = Object.entries(formulario)
mis_datos

//homework: crear un objeto con 3 propiedades, y agregar una porpiedad extra usando bracket notation.
//Guardar en variables, una lista de propiedades, y en otra, una lista de valores