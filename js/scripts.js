//Variables: es un espacio de almacenamiento que nos permite guardar informacion.

/*
? Datos:
tenemos distintos tipos de datos:
Numericos, alfanumericos y booleanos:

Numericos: Integer, Float => 36 , 1.70
Alfanumericos: String => mail, contraseñas, expresiones, domicilios.
Booleanos: true/false => evaluaciones de expresiones

Como se si un dato EXCLUSIVAMENTE numerico es tipo Integer o String?
Si el dato lo vamos a utilizar para operaciones matematicas, sera un dato Numerico. Sino, sera un dato string

? Variables: es una CAJA

nombre = "Sebastian"
mascota = "Limon"
ciudad = "Mar del Plata"
*/

//*Para declarar una variable utilizaremos ciertas reglas

// LET / CONST => Nos permite crear una variable para almacenar datos
// Sintaxis correspondiente: primero creamos la variable y luego le ASIGNAMOS el dato a contener

let nombre = "Sebastian"
const mascota = "Limon"

// con let, podremos CAMBIAR EL CONTENIDO que tiene almacenado, mientras que CONST, mantendra el mismo contenido siempre (es INMUTABLE)

//* creacion de variables: recomendaciones MUY IMPORTANTES
//no declaren variables intentando poner solo numeros o iniciarla con numeros o simbolos
let holamundo = "Hola mundo"

//Usar snake_case o camelCase, segun lo conveniente

//snake_case es separar cada palabra de nuestra variable con un guion bajo. EJ:
let direccion_empleo = "Av siempreviva 742"

//camelCase, es iniciar cada palabra con mayuscula EXCEPTO LA PRIMERA
let diasDelMes = 30

//*Metodos para poder VISUALIZAR nuestro codigo:

//A traves de un "console.log()", podremos visualizar resultados desde la consola de desarrollador en un pag web
console.log("frase desde mi documento JavaScript")
console.log(2+2);
console.log(6*8);

//Si queremos que el usuario VEA la devolucion de lo ocurrido, utilizaremos el ALERT

alert("Mensaje desde la ventana de alerta en Js")

//Como pedir un dato desde la ventana de Alert:
//Para esto , utilizaremos el prompt: es una ventana de alerta pero con la posibilidad de ingresar datos

let nombre_alumno = prompt("Diganos su nombre: ")
alert("hola", nombre_alumno)

//Concatenar: unir 2 strings para que se transformen en uno solo:
alert("Bienvenido " + nombre_alumno)