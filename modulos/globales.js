// let i = 0;
// let intervalo = setInterval(() => {
//   console.log("Hola");
//   if (i === 3) {
//     clearInterval(intervalo);
//   }
//   i++;
// }, 1000);

setImmediate(function () {
  console.log("Hola");
});

// console.log("Hola");
// console.log("Mundo");
