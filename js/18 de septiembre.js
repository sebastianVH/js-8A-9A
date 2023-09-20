//*Metodos asociados a ARRAYS.(son FUNCIONES (ejecucion de un codigo) que genera algun tipo de respuesta sobre el array. )

//usaremos un array con nombres , para nuestros ejercicios

const nombres = ["Seba","Nancy","Lucas","Tatiana"]

//*Agregar elementos a mi array: puedo usar el push o el unshift.

//*push(): nos ubica un nuevo elemento AL FINAL de nuestro array

nombres.push("Marina") // salida => ["Seba","Nancy","Lucas","Tatiana","Marina"]

//*unshift: agrega el elemento AL PRINCIPIO del array

nombres.unshift("Carlos") //salida => ["Carlos","Seba","Nancy","Lucas","Tatiana"]

//*pop(): quita el elemento al final del array  Y NOS DEVUELVE CUAL FUE.
const elemento_quitado = nombres.pop() //salida => elemento_quitado = "Tatiana" // ["Seba","Nancy","Lucas"]

//*shift(): quita el primer elemento del array Y NOS DEVUELVE CUAL FUE
const elemento_retirado = nombres.shift() //salida => elemento_retirado = "Seba" // ["Nancy","Lucas","Tatiana"]

//*METODOS DE ARRAY SPLICE Y SLICE

const frutas = ["Manzana","Kiwi","Pomelo","Frutilla","Melon","Uva","Mandarina","Sandia"]

//*slice NO MODIFICA EL ARRAY ORIGINAL
const frutas_slice = frutas.slice(1,6) //Nos devuelve UNA PORCION DE NUESTRO ARRAY, para poder almacenarlo en otro nuevo array
frutas_slice
//El primer argumento, representa el INDICE de inicio, el segundo, la cantidad de items a cortar

//*splice MODIFICA EL ARRAY ORIGINAL
const frutas_splice = frutas.splice(3,1,"Naranja") //nos devuelve una porcion del array, para almacenarlo en uno nuevo
frutas_splice
frutas
//el primer argumento representa el indice, el segundo la cantidad de elementos a quitar, y la tercera el reemplazo que tendra

//* length nos dira CUANTOS INDICES HAY EN EL ARRAY
nombres.length //salida => 4

//* sort, nos permite ordenar un array de manera ASCENDENTE. si quisieramos ordenarlo de manera DESCENDENTE, debemos agregarle al final el metodo reverse
nombres.sort().reverse()

//! CASO NUMERICO

const numeros = [10, 6, 19, 23 ,3 , 39,2,4, 45]
numeros.sort((a,b) => b - a) //Ordena los elementos de manera ASCENDENTE, si el primero que compara es MAS CHICO QUE EL SIGUIENTE.
//Si quisiera ordenarlo de manera DESCENDENTE, solo cambio el ORDEN DE LA RESTA (b-a)

//*Concat(): unificando arrays

const animales_selva = ["Monos","Yaguaretes"]
const animales_desierto = ["Serpientes","Camellos"]
const animales_savana = ["Elefantes","Leones"]

const arca_de_noe = animales_selva.concat(animales_desierto,animales_savana)
arca_de_noe

//*destructuring: toma los elementos de un array y los maneja de manera INDIVIDUAL
const combinados = [...animales_selva, ...animales_desierto,...animales_savana]

//Homework: crear un array de articulos de tienda de deportes: zapatillas, pelotas, medias, botines, etc.... tendra 5 elementos. 
/*
1- agregaran al final del array, un nuevo elemento
2- quitaran el primer elemento del array
3- insertar un nuevo elemento en el indice 3, quitando el anterior (ej: si estaba en el indice 3 "Zapatillas", lo quitaran y pondran algo distinto)
4- ordenar alfabeticamente de manera ASCENDENTE el array

5- crearan 3 array nuevos, cada uno con 2 elementos, y aplicando DESTRUCTURING O CONCAT, crear un solo array que contenga los contenidos de los 3 arrays (dentro tendra 6 elementos)

*/
