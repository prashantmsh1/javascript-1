// nn bb ss u-primitive in js
let a = null;
let b = 345;
let c = true; //can also be false
let d = BigInt("567") + BigInt("3")
let e = "Prashant"
let f = Symbol("I am a nice symbol")
let g = undefined // will remain undefined if left empty
console.log(a, b, c, d, e, f, g)
console.log(typeof c)

// Non Primitive Data Types in Js-Objects in js 
const item ={
    "Prashant":true,
    "Parth":false,
    "Ashutosh":67,
    "Abhishek":undefined

}
console.log(item["Prashant"])