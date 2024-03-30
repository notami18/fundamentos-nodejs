const sharp = require("sharp");

sharp("original.webp")
  .resize(80)
  .greyscale()
  .toFile("resized.webp", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Image resized");
    }
  });
