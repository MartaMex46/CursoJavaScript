
/*
Para solicitar datos al usuario, se puede utilizar el prompt desde el navegador directamente (console),
ya que para usarlo desde JavaScript se deben instalar paquetes de NTM (Network Time Machine)
*/

//No se puede ejecutar desde aquí, sino en el navegador

let nombre = prompt("Ingresa tu nombre");

let edad = prompt("Ingresa tu edad");

let mensaje = `Bienvenido ${nombre}, tu edad es ${edad}`;

console.log(mensaje);

/*
PARSEINT
Se utiliza para convertir un string a integer

Debido a que cuando se solicitan datos a los usuarios, el valor por defaul que se recibe es de tipo string

*/

parseInt(edad,10);

console.log(edad);
