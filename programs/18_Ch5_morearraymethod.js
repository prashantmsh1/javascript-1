let num = [1, 3, 4, 5, 6, 4, 6, 7];
let nummore = [12, 34, 34, 58, 45, 48, 62, 74];
let num_even_more = [123, 324, 654, 558, 645, 488, 682, 794];
delete num[2];
console.log(num);
console.log(num.length);
let newarray = num.concat(nummore);
console.log(newarray, num_even_more);
// sort method
let compare = (a, b) => {
    return a - b; // sorting function in ascending order
};
let num_sort = [224, 45, 76, 88, 23, 68, 567];
num_sort.sort(compare);
num_sort.reverse();
console.log(num_sort);
// splice and slice
let num2 = [224, 45, 76, 88, 23, 68, 567];
let deleted = num2.splice(4, 1, 34, 34, 56, 33); // returns deleted values
console.log(num2);
console.log(deleted);
let new_num = num2.slice(3,6)
console.log(new_num)
