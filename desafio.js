var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esbaja = persona => persona.altura < 1.60 // funcion flecha me devuelve personas q tienen una altura mayor de 1.75

/*const cambiar = persona => {
    persona.altura*=100 
    return persona
}*/

const cambiar = persona =>({
    ...persona,
    altura: persona.altura*100
})

var personas = [sacha,alan,martin,dario,vicky,paula]

var filtrar = personas.filter(esbaja) // devuelve un arreglo filtrado (muestra todos los datos del objeto)

var cast = personas.map(cambiar) // modifica el array original 

console.log(cast)

/*for (var i=0;i<personas.length;i++){
    console.log(personas[i].nombre)
}*/


/*var signo=prompt('Cul es tu signo?')
console.log(signo);

/*var contador = 0;

var llueve = () => Math.random()>0.25;

do{
  contador++;
}while(!llueve());

var frecuencia = contador===1 ? "vez":"veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);*/

/*var objeto ={
    nombre: 'Freddy',
    apellido: 'Lopez',
    edad:28,
    profesion:'estudiante'
}

function evaluar(objeto){
    if(objeto.edad>=18 && objeto.profesion==='estudiante'){
        console.log('Mayor de edad y estudiante');
    }
    else{
        console.log('Menor de edad');
    }
}

evaluar(objeto);

/*var arr=[{persona}];  2000066858

var nombres=['Juan','Roberto','Luis','Paul']
var apellidos=['Lopez','Rodriguez','Diaz','Loor']
var edad=[19,25,24,30]
var profesiones=['Desarrollador','Profesor','Doctor','Mecanico']


function persona(nombre,apellidos,edad,profesion){
    this.nombre=nombre,
    this.apellidos=apellidos,
    this.edad=edad,
    this.profesion=profesion
}


function llenar (){
    for (var i=1;i<16;i++){
        arr.push(new persona(nombres[Math.floor(Math.random() * 4)],apellidos[Math.floor(Math.random() * 4)],edad[Math.floor(Math.random() * 4)],profesiones[Math.floor(Math.random() * 4)]))
    }
}

function evaluar(){
    
    arr.forEach(element => {

    });

}

llenar()
evaluar()*/


/*var objeto ={
    nombre: 'Freddy',
    apellido: 'Lopez',
    edad:28
}

/*function imprimirNombre({nombre}){  // aceder al dato especifico del objeto
   console.log(nombre.toUpperCase())
}

imprimirNombre(objeto)
imprimirNombre({nombre:'Luis'}) // no se necesita el objeto manda directo el dato 
*/

/*function cumple(persona){
    //persona.edad+=1            // modifica el valor de la edad del objeto 
    return {                    
        ...persona,             // devuelve un nuevo objeto  en donde puedes modificar agregar mas valores 
        edad: persona.edad+1
    }
}

cumple(objeto)
console.log(objeto)


/*var nombre = 'Sacha'         //scope global nombre

function imprimir(nombre){        //scope local 
   nombre=nombre.toUpperCase()    // la variable nombre es local para acseder a la global s 
   console.log(nombre+".")
   window.nombre=window.nombre.toUpperCase()  // asi se accede a la variable global 
   console.log(window.nombre+"...")
}

imprimir(nombre)*/

/*var articulos = [{nombre:'acer-t984',costo:250},{nombre:'hp-868',costo:320},{nombre:'dellg3',costo:950}];

var filtroscosto=articulos.filter(function(articulo){ // este metodo sirve para filtrar un arreglo de objetos de forma horizontal dependiendo del criterio 
    return articulo.costo<=550
});

var mapnombre= articulos.map(function(articulo){ // sirve para mapear todo el arreglo de objeto toma el parametro para devolver un arreglo de string
    return articulo.nombre
});

var encuentraarticulo = articulos.find(function(articulo){ 
    return articulo.nombre==="Laptop";
});

articulos.forEach(function(articulo){
   console.log(articulo.nombre);
});

var articulosbaratos = articulos.some(function(articulo){  // devuelve un true 
    return articulos.costo<=600;
});*/

/*function auto (marca,modelo,year){
    this.marca=marca;
    this.modelo=modelo;
    this.year=year;
}

var nuevo=[];

function ingresardatos(){
   
    marcas=['tesla','mazda','susuki','toyota'];
    modelos=['tx9','r3','r5','tz'];
    years=[2020,2019,2016,2018];

    for(var i=0;i<30;i++){
        nuevo[i]=new auto(marcas[Math.floor(Math.random() * 4)],modelos[Math.floor(Math.random() * 4)],years[Math.floor(Math.random() * 4)]);
    }
}

ingresardatos();*/
/*var usuario;
var maquina;
function juego(usuario,maquina){

    switch(Boolean([])){
        
        case usuario===maquina:
        console.log("empate");
        break;

        case (usuario==="tijera" &&  maquina==="papel") || (usuario==="piedra" && maquina==="tijera") || (usuario==="papel" && maquina==="piedra"):
        console.log("Gana usuario");
        break;

        case (maquina==="tijera" && usuario==="papel") || (maquina==="piedra" && usuario==="tijera") || (maquina==="papel" && usuario==="piedra"):
        console.log("Gana maquina");
        break;

    }
}
juego("papel","papel")*/
