import * as Neutralino from "@neutralinojs/lib";

Neutralino.init();

console.log("Hello Neutralino.js from Vite!");

Neutralino.filesystem.readDirectory('./').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
