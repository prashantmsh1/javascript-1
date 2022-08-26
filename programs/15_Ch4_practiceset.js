// q2
let intro = "Hello! This is prashant here";
console.log(
    `the word ${"who"} ${intro.includes("who") ? `is` : `is not`} in the intro `
);
console.log(intro.startsWith("Hello"));
console.log(intro.toLowerCase());
let info="Please give Rs 1000"
let amount=info.slice(15)
console.log(amount)
console.log(typeof(amount))
amount=Number.parseInt(amount)
console.log(typeof(amount))
// sum=0
// for (let i = 0; i < info.length; i++) {
//     const element = Number.parseInt(info[i]);
//    if (element=>0 && element<=9) {
//     console.log(element)
//    }
//    else
//    continue
// }
console.log(info.replace("a","c"))