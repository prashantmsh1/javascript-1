const prompt = require("prompt-sync")();
obj = {
  prashant: 90,
  aman: 78,
  rahul: 89,
  rishab: 78,
};
for (a in obj) {
  console.log("marks of", a, "is", obj[a]);
}
for (let i = 0; i < obj; i++) {
  console.log("marks of", a, "is", obj[a]);
}
let cn = 45;
let n;
while (n != cn) {
  n = prompt("enter the number");
}
console.log("you have entered the correct number");

const mean = (num) => {
  var sum = 0;
  sum += num / 5;
  return sum;
};
for (let i = 0; i < 5; i++) {
  let num = prompt("enter the");
  num = Number.parseInt(num);
  var v = mean(num); // function not working due to some reason
}
console.log("mean is ", v);
