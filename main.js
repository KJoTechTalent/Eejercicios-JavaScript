/*Crea una fuction arrow que retorne tu nombre y tus apellidos 
e imprímelos por pantalla desde fuera de la función*/

// function nombreCompleto(nombre, apellido) {
//   return nombre + " " + apellido;
// }
// console.log(nombreCompleto("Kelly", "Almeida"));






/*Crea una función con nombre y sin return. Pásale un tipo de dato boolean 
y dentro de la función imprime el valor que hemos pasado por los parámetros.*/

// function tiempoAhora(tiempo){
//     console.log("Ahora mismo en Reus está lloviendo:" + " " + tiempo)
// }

// let lloviendo = true;
// tiempoAhora(lloviendo)






/* Crea una variable que reciba parámetros infinitos, haz la llamada con los 
valores 1,2,3,4,5 y muestra dichos mediante un ForEach*/

// function numerosInfinitos (...numbers){
//     numbers.forEach(function(num){
//         console.log(num);
//     });
// }
// numerosInfinitos (1,2,3,4,5);





/* Apartir de la siguiente innstrucción que genera un número aleatorio 
console.log(Math.round(Math.random())); que genera un número aleatorio 0 o 1. 
Haz una función con return, invocala y muestra por consola cara si el valor es 1 
y cruz si el valor es 0.*/

// function caraCruz(){

//     let numAleatorio = console.log(Math.round(Math.random()));
//     if (numAleatorio === 1){
//         console.log("Cross");
//     }
// }
// let resultadoMoneda = caraCruz();
// console.log(resultadoMoneda);

// function crossFace() {
//   let ladoMoneda = Math.round(Math.random());
//   console.log(ladoMoneda);
//   if (ladoMoneda === 1) {
//     return "cruz";
//   } else if (ladoMoneda === 0) {
//     return "cara";
//   }
// }
// const resultadoMoneda = crossFace();
// console.log (resultadoMoneda);



/*Crea una función pasa 3 números por parámetros 
súmalos y devuelve el resultado mediante a return. Finalmente
muéstralos por pantalla.*/

/*function numeros(){
    let num = [280, 47, 339];
    let sumar = 0;
    for (let i = 0; i < num.length; i++){
        sumar += num[i];
    }
    return sumar;
}
let resultadoSuma = numeros();
console.log(resultadoSuma);*/






