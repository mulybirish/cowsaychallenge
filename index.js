const info = require("./information");
let cowsay = require("cowsay");
// console.log(`my name is ${info.name}`);

console.log(
  cowsay.say({
    text: `my name is ${info.name} I'm a wild cow from ${info.campus} `,
    e: "-O",
    T: "U ",
  })
);
