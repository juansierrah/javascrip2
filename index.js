//let alcance local
let numero_1 = 1;
//var alcance global
var cadena = "hola mundo";
//constante
const numero_2= 2;

numero_1 = 5;
cadena = "Hola Mundo";

//MOSTRA MENSAJES EN CONSOLA
console.log(cadena);
console.error("estos es un error");
console.table({nombre: "andres"});
console.log("------------------Estructuras de decision----------------")
if(numero_1 > numero_2){
    console.log("numer_1 es  mayor");

}else{
    console.log("numero_2 es mayor");
}

let numero_3 = 10;
let numero_4 = 5;
// and
if(numero_1>numero_2 && numero_3 > numero_4){
    console.log("cumple");
}else{
    console.log("no cumple")
}
//or
if(numero_1 > numero_2 || numero_3 > numero_4){
    console.log("cumple");

}else{
    console. log("no cumple");
}

// ciclos-----
console.log("----------Ciclos----------------")

//for
for(let i = 0; i < 10; i++){
    console.log(i);
}
