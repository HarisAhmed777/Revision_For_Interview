
export  const Variablesyntax =`
    var = 10;
    let a = 10;
    const a= 10;

`

export const stringconversion = `
let num = 42;
console.log(String(num)); // "42"
console.log(num.toString()); // "42"

let bool = true;
console.log(String(bool)); // "true"

let arr = [1, 2, 3];
console.log(String(arr)); // "1,2,3"

`

export const numberconversion = `
let str = "123";
console.log(Number(str)); // 123

let bool = true;
console.log(Number(bool)); // 1

let invalidStr = "abc";
console.log(Number(invalidStr)); // NaN (Not a Number)

console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45

`

export const booleanconversion = `
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

`

export const concatenation = `
let num = 10;
let str = " apples";

console.log(num + str); // "10 apples"

`

export const ifelse =`
 let age = 18;
 if(age>=18 && age <50){
    console.log("You are eligible for license")
 }
 else if(age>50){
    console.log("You need medical certificate for licence");
 }
 else{
    console.log("You are not eligible for licence");

 }


` 
export const switchsyntax = `
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
`
export const switchexp = `
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  
`