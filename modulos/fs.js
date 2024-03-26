const fs = require("fs");

function leerArchivo(ruta) {
  fs.readFile(ruta, (err, data) => {
    if (err) {
      console.error("No se pudo leer el archivo", err);
    } else {
      console.log(data.toString());
    }
  });
}

leerArchivo(__dirname + "/archivo.txt");

function escribirArchivo(ruta, contenido) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("No se pudo escribir el archivo", err);
    } else {
      console.log("Se ha escrito el archivo");
    }
  });
}

escribirArchivo(__dirname + "/archivo1.txt", "Soy un archivo nuevo");

function borrarArchivo(ruta) {
  fs.unlink(ruta, (err) => {
    if (err) {
      console.error("No se pudo borrar el archivo", err);
    } else {
      console.log("Se ha borrado el archivo");
    }
  });
}

borrarArchivo(__dirname + "/archivo1.txt");
