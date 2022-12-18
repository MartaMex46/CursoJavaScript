console.log("¡Hola mundo!")

const pi=3.14

//Declaración
let miVariable

//Asignación
miVariable=200
console.log(miVariable)

//Reasignación
miVariable=100
console.log(miVariable)

//Declaración y inicialización
let miVariable2=50

//Tipos de números

let entero=34           //number
let flotante=34.02      //number

console.log("mis numeros", entero, flotante)

//STRINGS (cadenas de texto)

let miNombre = "Marta"

let miApellido = 'Contreras'

//TEMPLATE STRINGS

console.log(`Mi nombre completo es ${miNombre} ${miApellido}`)

//BOOLEANOS (true or false)

let esMayor=true;
esMayor=false;

//UNDEFINED (variables que no se han inicializado o que así se asigne su valor)

let miVariable3         //Si no se inicializa, será undefined
miVariable3=undefined   //Puede asignarse ese valor de undefined

//NULL === NADA (la nada es algo)

let miName= "Marta";
let miLastName="Contreras";
let miSurname=null;

//REGLAS Y CONVENCIONES

let edad = 20       //Empezar por letra
let _edad = 20      //Empezar por underscore
let $edad = 20      //Empezar con $

let nombre = "Cesar"        //
let nombre2 = "Colina"      //Texto y numeros
let mi_apellido = "Leal"    //Texto y underscore
let altura$ = 190           //Texto y $

//CamelCase (cada parabra empieza por mayúscula, excepto la primera)
//Los nombres de las variables deben ser explícitos, tener algún significado para la interpretación de otro programador
//Este lenguaje es sensitive, por lo que es sensible a mayúsculas y minúsculas

let primerNombre = "Cesar"
let miEdad = 24
let numeroDeVocales = 5

//Suma de literales

let resultado = 100 + 200 ;
console.log(resultado);

//Suma de variables (valores pasados por referencia)

let a = 150;
let b = 125;
let resultado2 = a + b; 

console.log(resultado2)


//OPERACIONES ARITMETICAS

console.log(30 + 50);   //Suma
console.log(30 - 50);   //Resta
console.log(6 * 2);     //Multiplicación
console.log(2**4);      //Exponenetes
console.log(6 / 2);     //División
console.log(5%2);       //Modulo o residuo

let x = 20;           
x++;                    //Incremento
console.log(++x);       //Incrementa en uno, y luego lo muestra
console.log(x++);       //Sólo lo incrementa, pero no lo imprime en este momento

let y = 16;
y--;                    //Decremento
console.log(y);       

/*ORDEN DE PRECEDENCIA DE OPERADORES ARITMÉTICOS

PARENTESIS
INCREMENTO
DECREMENTO
MULTIPLICACION
DIVISION
MODULO O RESIDUO
SUMA
SUSTRACCIÓN O RESTA
*/

let resultado3 =  3 + 8 * 3;
let resultado4 = (3 + 8) * 3;

console.log(resultado3);
console.log(resultado4);

//OPERADORES DE ASIGNACION

let numA = 10;
numA += 20;
console.log(numA);

let numB= 10;
numB -= 20;
console.log(numB);

let numC = 10;
numC *= 20;
console.log(numC);

let numD = 10;
numD /= 20;
console.log(numD);

let numE = 10;
numE %= 3;
console.log(numE);

//OPERADORES DE CADENA

let myName = 'Marta ';
let lastName = 'Contreras';
let nombreCompleto = myName + lastName;
console.log(nombreCompleto);

console.log(`${myName} ${lastName}`);