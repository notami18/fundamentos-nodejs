const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding("UTF8");

// readableStream.on("data", function (chunk) {
//   data += chunk;
// });

// readableStream.on("end", function () {
//   console.log(data);
// });

// process.stdout.write("Hello World!");

const transform = stream.Transform();

function Mayus() {
  stream.Transform.call(this);
}

util.inherits(Mayus, stream.Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
