const prompt = require("prompt-sync")();
let name = "My name is Prashant\n";
let sirname = "Mishra";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(3, 6));
console.log(name.slice(3));
console.log(name.replace("Pra", "uri"));
console.log(name.concat(name, sirname, " ok"));
console.log(name.trim()); //removes blank whitespaces
let res = " ";
for (let i = 0; i < name.length; i++) {
    const element = name[i];
    res = res.concat(name.charAt(i)); //method to add the word of a string
}
console.log("the name is" + res);
