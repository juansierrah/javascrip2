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
console.log("----------while----------------")
//while
let contador = 0
while(contador < 5){
    console.log(contador);
    ++contador;
}

// impimir todos los numero pares del 1 al 100
 for(let i = 0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }

 }

 console.log("-----------arreglos---------")

 let numeros = [];

 console.log("numeros->", numeros);

 numeros.push(10);
 numeros.push(20);
 numeros.push(30);

 console.log("numeros>-", numeros)
 //quitar el ultimo elemneto
 //numeros.pop();
 console.log("numeros>--", numeros);

 let frutas = ["manzana", "melon","piña"];
 console.log(frutas);

 // ejercicio
 nuevoarreglo = [];
 for(let i = 0; i < numeros.length; i++){
    if(numeros[i] != 20){
        nuevoarreglo.push(numeros[i]);
        
        
    }

 }
console.log("nuevo arreglo" , nuevoarreglo)
console.log(numeros[numeros.length-1])
