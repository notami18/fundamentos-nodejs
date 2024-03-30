// const p = require("process");

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("El proceso terminó");

  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  }, 0);
});

setTimeout(() => {
  console.log("Esto no se va a ver nunca");
}, 0);

process.on("uncaughtException", (err, origen) => {
  console.error("Vaya se nos ha olvidado capturar un error");
  setTimeout(() => {
    console.log("Esto viene desde las excepciones");
  }, 0);
});

functionQueNoExiste();

console.log("Esto si el error no se recoge, no sale");

// process.on("uncaughtRejection", (err, origen) => {
//   console.error("Vaya se nos ha olvidado capturar un error");
//   console.error(err);
// });
