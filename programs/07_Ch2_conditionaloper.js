const prompt = require("prompt-sync")();
let a = prompt("Hey whats your age?");
a = Number.parseInt(a); //converting the string to a number
console.log(typeof a);

if (a < 9) {
    console.log("you are a kid and dont even think of driving");
} else if (a < 18 && a > 9) {
    console.log("go and play gta");
} else {
    console.log("you can drive");
}
console.log("done");
console.log("you can", a < 18 ? "not drive" : "drive");
