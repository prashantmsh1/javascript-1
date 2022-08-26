const prompt = require("prompt-sync")();
let a = 3;
let b = 4;
let c = 5;
function avg(a, b, c) {
  return 1 + (a + b + c) / 3;
  // Math.round() can be used to round off a number
}
// modern js function  is defined like this
const sum = (a, b) => {
  return a + b;
};
console.log("the average of a b c is ", (a + b + c) / 3);
console.log("one plus average of a b c is =", avg(a, b, c));
console.log("sum of a and b is =", sum(a, b));
const hello = () => {
  //this function can return w/o input
  console.log("hey how are you?I am fine yaar");
  return 5;
};
let v = hello();
console.log(hello());
