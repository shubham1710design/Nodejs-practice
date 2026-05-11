// let n = 5;
// for(let i=0; i<n; i++){
//     console.log("hello",i);
// }

// let args = process.argv;
// for (let i=2; i<args.length; i++){
//     console.log("hello to",args[i]);
// }

// const info = require("./fruits");
// console.log(info);


import {sum,g} from "./math.js";
import { generate} from "random-words";
console.log(sum(1,3));
console.log(g);
console.log(generate(5));