
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

export const arraysyntax = `
  const arrayName = [value1,value2,value3];
`
export const arrayexample =`
  const fruits = ['mango','appple','banana'];
  const emptyarray = [];
  
`

export const arraymethods = `
const array = ["goa", "appple", "orange"];
array.push("banana");
console.log(array);
// o/p---> ['goa', 'appple', 'orange', 'banana']
array.pop();
console.log(array);
// o/p---> ['goa', 'appple', 'orange'];
console.log(array.shift()); // o/p----> goa;
console.log(array); //o/p--->['appple','orange'];
array.unshift("mango");
console.log(array); //o/p--->['mango','appple','orange'];
const array2 = [10, 32, 4, 1, 4];
array2.sort();
console.log(array2); //o/p---> [1,10,32,4,4];
//The reason is ,sort function basics converts all to string and arranges them in a alphabetical order or lexographical order ;
// to get it in a aascending order ,you have to invoke a arrow func ,pass two paramter and subract both
// for example array.sort((a,b)=>a-b);
array2.sort((a, b) => a - b);
console.log(array2); //o/p---->[1,4,4,10,32]
//desending order;
array2.sort((a, b) => b - a);
console.log(array2); // o/p --->[32,10,4,4,1]

//array2.include() -->It will check whether number is present or not ,and return a boolean value;
console.log(array2.includes(10));
//map --> as usual map function we need an arrow fucntion and then perform the operations;;
const newarray = array2.map((num) => num * 2);
console.log(newarray);//o/p[64, 20, 8, 8, 2]
//concat()--> this will concat two or more arrays;
//     concat() returns a new array and does not modify the original arrays.
// To keep the merged result, you must assign it to a variable.
// The spread operator ... is a modern and flexible way to merge arrays.
const array3 =  array2.concat(newarray,[15,13,11,12]);
console.log(array3);//o/p--> ) [32, 10, 4, 4, 1, 64, 20, 8, 8, 2, 15, 13, 11, 12]
const filerarray = array3.filter((num)=>num%2==0);
console.log(filerarray);//o/p--> [32, 10, 4, 4, 64, 20, 8, 8, 2, 12]
//toString()---> It will convert all the elemnts in array to String
console.log(filerarray.toString().split(',').map((num)=>num+1)) ;//o/p-->This is the output of toString (10) [32, 10, 4, 4, 64, 20, 8, 8, 2, 12]
console.log("This is the output of toString",filerarray);
console.log(filerarray.join('+')) //o/p-->32+10+4+4+64+20+8+8+2+12
`
export const objectsyntax = `
const object = {
  key1:'value1',
  key2:'value2',
  key3:'value3'
}
const objexample = {
  name:"Haris",
  age:24,
  skills:["react","node","dsa"],
  otherwaytowrite:{
      frontend:["Recact","Css"],
      backend:["Node","Express"],
      programminglanguages:"c++",
  }
}
console.log(object);
console.log(objexample);


`