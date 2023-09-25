//Estructuras combinadas: nuestros ARRAYS y OBJETOS,pueden combinarse entre si, para obtener DIFERENTES estructuras con ambos TIPOS DE DATOS:
//*Veamos un ejemplo en el cual un ARRAY contiene UN OBJETO_

const alumnos_cursos = [
    {nombre:"juan",curso:"Programacion"},
    {nombre:"pepe",curso:"Ingles"},
    {nombre: "seba",curso: "Diseño Grafico"}
    ]

alumnos_cursos[2].nombre //*En este ejemplo, ingresamos al INDICE 2 del array y luego a la PROPIEDAD nombre

//* Veamos un ejemplo en el cual UN OBJETO, contiene dentro UN ARRAY de elementos. En este ejercicio, veremos cual es la SEGUNDA MATERIA, que enseña el profesor

const profesor = {
    nombre: "Miguel", 
    cursos: ["html/css","js","Python"], 
    horarios: ["Mañana","Noche"]
    }

profesor.cursos[1]

//*Crearemos una estructura mas compleja, y haremos una lista de ITEMS a cumplir:

const profe = {
    nombre: "Sebastian",
    ciudad: "Mar del plata",
    mascotas : ["Firulais","Gamora"],
    banda_favorita: "Nirvana",
    temas_favoritos: [{cancion: "In bloom", artista: "Nirvana" },{cancion: "Californication",artista: "Red hot chili peppers"}],
    profesion: {nombre: "Profesor", institucion: "Global Academy", antiguedad: "1 año"}
}

//* Cuales son las mascotas del profe: 
//* cual es el nombre de su segundo tema favorito
//* en que institucion trabaja

profe.mascotas[0] // profe.mascotas[1]
profe.temas_favoritos[1].cancion

profe.profesion.institucion

//HOMEWORK:
//? Con la siguiente estructura, acceder a los siguientes items:
//* A) rubro del negocio
//* B) el precio del segundo articulo
//* C) el stock del ultimo articulo
//* D) el nombre del primer empleado de la primer sucursal
//* E) el rol del segundo empleado de la segunda sucursal

const miNegocio = {
  articulos: [
    { nombre: "Zapatillas", precio: 12000, stock: 100 },
    { nombre: "Remeras", precio: 8000, stock: 40 },
    { nombre: "Medias", precio: 1500, stock: 300 }
  ],
  detalles_negocio: {
    nombre: "Super Deportes",
    rubro: "Ropa y calzado deportivo",
    fundacion: 1990
  },
  sucursales: [
    { ubicacion: "Springfield", empleados: [ {nombre: "Homero Simpson",rol: "Jefe"}, {nombre:"Barney Gomez", rol: "Vendedor"}] },
    { ubicacion: "Bikini Bottom", empleados: [ {nombre: "Calamardo", rol: "Gerente"}, {nombre:"Arenita", rol:"Cajera"}] }
  ]
};


//* FUNCIONES: estructuras que envuelven BLOQUES de codigo,que se ejecutaran al momento que nosotros INDIQUEMOS que deben ejecutarse. La idea de una funcion es crear BLOQUES de codigo que sean REUTILIZABLES y que generen un mejor ORDEN dentro de nuestro archivo


//? ejemplo: tenemos un codigo que pide nombre y fecha nac del usuario, lo saluda y le dice su edad

// const nombre = prompt("Diganos su nombre: ")
// const anio_nac = prompt("Indique su año de nacimiento")
// alert(`Hola ${nombre}, tu edad es de ${2023-anio_nac}`)

//* Veamos como crear una funcion

function saludar () {
    //*BLOQUE DE CODIGO
    const nombre = prompt("Diganos su nombre: ")
    const anio_nac = prompt("Indique su año de nacimiento")
    alert(`Hola ${nombre}, tu edad es de ${2023-anio_nac}`)
}

//*Una vez creada la funcion debe INVOCARLA/LLAMARLA para que su bloque de codigo se EJECUTE
saludar()
alert("funcion ejecutada ok")
saludar()
alert("funcion 2 ejecutada ok")
saludar()
alert("funcion 3 ejecutada ok")