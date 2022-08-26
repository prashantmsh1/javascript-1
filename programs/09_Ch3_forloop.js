// program to sum of n natural numbers
const prompt = require("prompt-sync")();
let sum = 0;
let n = prompt("enter the number of terms");
n = Number.parseInt(n);
for (i = 1; i <= n; i++) {
  sum += i;                 
}
console.log("sum of", n, "natural number is ", sum);
// for in loop
let obj = {
  prashant: 90,
  harry: 89,
  abhay: 88,
  ankit: 34,
};
for (const a in obj) {
  console.log("marks of " + a + " are " + obj[a]);
//   comma will give a b and + will give ab
}
// for of loop
for (const b in "prashant") {
  if (Object.hasOwnProperty.call("prashant", b)) {
    const element = "prashant"[b];
    console.log(element);
  }
}
