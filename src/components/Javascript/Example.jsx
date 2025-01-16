import React from "react";

const Example = () => {
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
    return <div className="m-3">Example</div>;
};

export default Example;
