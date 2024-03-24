function hola(nombre, miCallback) {
  console.log("Hola, soy una función asíncrona");
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adiós " + nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");

hola("Carlos", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso...");
  });
});
