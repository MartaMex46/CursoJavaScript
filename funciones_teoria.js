
//DATOS PRIMITIVOS
console.log(typeof "Marta");
console.log(typeof 3.14);
console.log(typeof true);
let x;
console.log(typeof x);

//DATOS NO PRIMITIVOS
console.log(typeof {nombre:"Marta", edad:47});
console.log(typeof [1,2,3,4]);
console.log(typeof null);
console.log(typeof function miFuncion(){});

// FUNCIONES

//Declaración
function miFuncion(){
    //cuerpo de la función
}

//Invocar
miFuncion();

//Partes de una función: función, parámetros, retorno

//Primero se declara la función con sus parámetros y en el cuerpo de la función, el algoritmo
function saludar(){
    console.log("Hola mundo")
    console.log("Hola a todos")
}

saludar();
saludar();

//Parámetros de una función

function sumar(numero1, numero2){
    console.log(numero1 + numero2)
}

sumar(4,5);
sumar(25,36);