//Juan tiene 15 años y no tiene carro. Barbara tiene 28 años y tiene carro, pero no sabemos el color del carro de Barbara

const nombrePersona1= "Juan";
let edadPersona1 = 15;
let tieneAutoPersona1 = false;

const nombrePersona2="Barbara"
let edadPersona2 = 28;
let tieneAutoPersona2 = true;
let colorAutoPersona2;


//Implementación de soluciones
//Cálculo del área de un rectángulo

const base = 5;
const altura = 3;

const area = (base * altura)/2;

console.log(area);


//EJERCICIO # 2
//Diseñar un algoritmo que lea 3 variables y calcule e imprima su suma, su producto y su media aritmética

//Datos de entrada: a:entero, b:entero, c:entero
//Datos de salida: suma:entero, producto:entero, media:flotante

let a = parseInt(prompt("ingrese el primer numero"),10);
let b = parseInt(prompt("Ingrese el segundo numero"),10);
let c = parseInt(prompt("Ingrese el tercer numero"),10);

let suma = a + b + c;
let producto = a * b * c;
let media = producto / 3;

//EJERCICIO #3

/*
Diseñar un algoritmo que lea el peso de una persona en libras
y nos devuelva su peso en kilogramos y gramos.

*/

//Datos de entrada: pesoLb:flotante
//datos de salida: pesoKg:flotante, pesoGr:flotante

const libra = 0.453592;

let pesoLb = parseInt(prompt("Indica tu peso en libras"),10);
let pesoKg = pesoLb * libra;
let pesoGr = pesoKg * 1000;

console.log(pesoKg, pesoGr);

//EJERCICIO #9


