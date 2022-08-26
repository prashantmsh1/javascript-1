let num=[34,23,12,78,83,58]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
    
}
//for each loop
num.forEach((element) =>{ //its a type of loop for loop
    console.log(element*element)
})
//from loop array
let name="prashant"
let arr=Array.from(name)
console.log(arr)
// for ....of loop
for (const i of num) {
    console.log(i)
}
// for ...in loop
for (const i in num) {
   console.log(i)
    }
