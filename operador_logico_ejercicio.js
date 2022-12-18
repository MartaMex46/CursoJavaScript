//Para subir a la montaña rusa en una feria

//Se debe ser mayor de edad y medir más de metro y medio

const soyMayorDeEdad= true;
const midoMasDeMetroYMedio = false;

const puedoSubir = soyMayorDeEdad && midoMasDeMetroYMedio;
console.log(puedoSubir);

//Se debe ser mayor de edad o medir más de metro y medio

const puedoSubir2 = soyMayorDeEdad || midoMasDeMetroYMedio;
console.log(puedoSubir2);

console.log(!puedoSubir);   //Una negación
console.log(!!puedoSubir);  //Doble negación