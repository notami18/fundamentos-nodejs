async function hola(nombre) {
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
      resolve(nombre);
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

async function main() {
  let nombre = await hola("Carlos");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
}

main();
