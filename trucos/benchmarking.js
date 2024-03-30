console.time("todo");
let suma = 0;

console.time("bucle");

for (let i = 0; i < 1000000; i++) {
  suma += i;
}

console.log(suma);
console.timeEnd("bucle");

let suma2 = 0;

console.time("bucle2");

for (let j = 0; j < 100000000; j++) {
  suma2 += j;
}

console.log(suma);
console.timeEnd("bucle2");

console.time("asincrono");
console.log("Empieza el proceso asíncrono");
asincrona().then(() => {
  console.timeEnd("asincrono");
});

console.timeEnd("todo");

console.log("Empieza el proceso");
function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Termina el proceso asíncrono");
      resolve();
    }, 1000);
  });
}
