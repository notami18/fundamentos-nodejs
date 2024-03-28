function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error en mi función asíncrona");
      cb(error);
    }
  }, 1000);
}

try {
  // serompe();
  seRompeAsincrona(function (error) {
    console.log(error.message);
  });
} catch (error) {
  console.error("Vaya, algo se ha roto...", error);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aquí está al final");
