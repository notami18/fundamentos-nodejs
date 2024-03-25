function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      // resolve(nombre);
      reject("Error en hablar");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Adiós " + nombre);
      resolve();
    }, 1000);
  });
}

// --
console.log("Iniciando proceso...");
hola("Carlos")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Termianndo proceso...");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
