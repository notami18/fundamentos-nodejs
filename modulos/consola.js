console.log("Mensaje");
console.info("Simplemente Mensaje");

console.error("Error!!");

console.warn("Alerta!");

let Tabla = [
  { a: 1, b: "A" },
  { a: 2, b: "B" },
];
console.table(Tabla);

console.group("Conversación");
console.log("Hola");
console.log("bla bla bla");
console.log("Ok Adios");
console.groupEnd("Fin de la Conversación");

console.count("Veces"); // Veces: 1
console.count("Veces"); // Veces: 2
console.count("Veces"); // Veces: 3
console.count("Veces"); // Veces: 4
console.count("Veces"); // Veces: 5

console.time("**Inicio**");
for (let i = 0; i < 50; i++) {
  // Contador
  console.count("Ronda: ");
}
console.timeEnd("**Inicio**"); // Inicio: 2.381ms
