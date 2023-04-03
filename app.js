// Ejercicio 1 : Realizar programa donde el usuario introduce 2 números y el ordenador responde sacando por pantalla la resta de ambos números y también su multiplicación.
let numero1 = parseInt(prompt("Introduce un numero"));
let numero2 = parseInt(prompt("Introduce otro numero"));

document.write(` la resta de ${numero1} - ${numero2} = ${numero1 - numero2}` + "<br>");
document.write(` la multiplicacion de ${numero1} x ${numero2} = ${numero1 * numero2}` + "<br>");

// Ejercicio 2 : El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm'). Mostrar x consola la respuesta (si contiene o no)

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

console.log(`tu nombre incluye la letra a, ${nombre.includes("a")} y la letra m, ${nombre.includes("m")}`);
console.log(`tu nombre incluye la letra a, ${apellido.includes("a")} y la letra m, ${apellido.includes("m")}`);

// Ejercicio 3 : Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito')
// investigar a través de que método podemos quitar los guiones y reemplazar por espacios.

let pablito = ("Pablito-clavo-un-clavito");
let pablito2 = (`${pablito.replace(/[-]/g, " ")}`);

console.log(`${pablito}  ${pablito2}`);