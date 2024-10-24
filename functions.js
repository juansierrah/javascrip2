//----------Funciones----

function sumar(num_1, num_2){
    let suma = num_1 + num_2
    return suma;
}
let suma_1 = sumar(9, 5);
let suma_2 = sumar(9, 5);
let suma_3 = sumar(9, 5);

console.log("suma_1", suma_1, "\nsuma_2", suma_2, "\nsuma_3", suma_3);


 const multiplicar = (num_1, num_2)=>{
    return num_1 * num_2
 }
 console.log(multiplicar(2, 3));

 function funcionsuperior(operacion){
    let resultado = operacion(2, 10) + 20;
    console.log("resultado funcion de orden superior", resultado);
 }
 funcionsuperior(multiplicar);