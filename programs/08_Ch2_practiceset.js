// // problem1
const prompt=require("prompt-sync")()
let age=prompt("what is your age")
if(age>10 && age<20){
    console.log("Your age is between 10 t0 20")
}
else
console.log("invalid age")
// problem2
 
let num=prompt("enter a number")
num=Number.parseInt(num)
switch (num) {
    case 1:
        console.log("you have entered 1")
        break;
    case 2:
        console.log("u have entered 2")
        break;
    default:
        console.log("u have entered invalid number")
        break;
}

// problem3
let n=Number.parseInt(prompt("enter the number"))
if (n%2==0) {
    console.log("number is divisible by 2")
}
else
console.log("number is odd")
// problem 6
let age2 = prompt("enter the age")
age2>18?console.log("you can drive"):console.log("you cannot drive")
