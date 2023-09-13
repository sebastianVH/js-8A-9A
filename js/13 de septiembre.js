//*Calculadora con una suma en JS: le voy a pedir al usuario 2 numeros, y los voy a sumar, y luego mostrar el mensaje de la suma

// let numero_1 = prompt("Ingrese el primer numero: ")
// let numero_2 = prompt("Ingrese el segundo numero: ")

// console.log(typeof numero_1); // Nos dice que tipo de dato es el contenido de una variable
// console.log(typeof numero_2);
// let suma = numero_1 + numero_2

//alert("La suma de los 2 numeros es "+ suma)

//*Como vimos en el ejemplo, los datos tomados son "strings", por lo tanto, no podemos sumarlos! Para poder realizar una operacion de suma como si fuesen numeros, debemos hacer una conversion de datos:

//
//parseFloat => transforma a numero float un string
//parseInt => transforma a numero entero un string

// let numero_1 = prompt("Ingrese el primer numero: ")
// let numero_2 = prompt("Ingrese el segundo numero: ")
// //*Convertiremos los datos tomados a numeros!
// //* para eso utilizaremos el parseo (parse)
// let suma = parseInt(numero_1) + parseInt(numero_2)

// alert("La suma de los 2 numeros es "+ suma)

//*Cohercion de datos: Js siempre intentara resolver las operaciones que les demos, transformando los datos a una manera en la cual puedan ser interpretados y ejecutados bajo la operacion matematica demandada

//*Tenemos que mostrar un string al usuario , el cual contiene varios datos, en un mensaje:
//los datos son su nombre, ciudad y edad. Estos datos estan almacenados en variables

let nombre = "Sebastian"
let ciudad = "Mar del Plata"
let edad = 20

alert("Hola " + nombre + " que bonita es la ciudad de " + ciudad + ". Eres muy joven!, no sabia que tienes "+ edad + " años!")

//*Template string: Esta herramienta provista por Js, nos permite escribir variables directamente dentro de un unico string!! para eso, utilizaremos la comilla invertida (``) (cuyo atajo de teclado es alt+96) y dentro del string escribiremos las variables utilizando el signo $ seguido de las llaves {}, y aqui dentro colocaremos la variable a utilizar

alert(`Ts: Hola ${nombre} que bonita es la ciudad de ${ciudad}. Eres muy joven! no sabia que tienes ${edad} años!`)

//! Atencion: el uso de Template String nos va a ser MUY UTIL A FUTURO. RECOMIENDO PRACTICARLO!!!

//*ARRAYS: es un conjunto de datos ordenados que se almacenan dentro de una unica variable. Tomemos el ejemplo de una lista de articulos. Para crear un Array, utilizaremos los CORCHETES. Abrimos un corchete para cargar los datos, y una finalizada la carga, los cerramos. El array ordena los elementos a traves de INDICES: posiciones numericas, consecutivas, que comienzan a partir del CERO (0)

let inventario = ["tornillos","clavos","arandelas","bulones","tuercas"]

//puedo acceder a ver un UNICO ELEMENTO, mediante su INDICE: para esto utizaremos la variable junto con los corchetes, y dentro pondremos el NUMERO DE INDICE QUE QUERRAMOS CONSULTAR

//EJ inventario[2]

//HOMEWORK: crear un Array, con minimo 6 elementos, y consultar el primero, el ultimo y alguno de los del medio.