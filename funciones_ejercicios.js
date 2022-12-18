/*CALCULADORA
Crea 4 funciones que emulen las propiedades basicas de una calculadora
Estas funciones se deben llamar sumar, restar, multiplicar, dividir
*/

let a, b, resultado;

function sumar(a, b){
    resultado= a + b;
    console.log(resultado)
}

function restar(a, b){
    resultado= a - b;
    console.log(resultado)
}

function multiplicar(a, b){
    resultado= a * b;
    console.log(resultado)
}

function dividir(a, b){
    resultado= a / b;
    console.log(resultado)
}

sumar(4,5);
restar(25,4);
multiplicar(8,6);
dividir(9,2);