let num=[4,5,23,45,2]
let b=num.toString()
console.log(typeof b)
console.log(b)
let c=num.join(" ")
console.log(c)
console.log(typeof c)
c=Number.parseInt(c) // string to number
console.log(typeof c)
let r=num.pop() //pop returns pop elements here  its 2
console.log(num,r)
let p=num.push(47)
console.log(p,num)
let shift=num.shift()
console.log(shift,num)
let unshift=num.unshift(3)
console.log(unshift,num)
let d=num
delete d[2]
console.log()