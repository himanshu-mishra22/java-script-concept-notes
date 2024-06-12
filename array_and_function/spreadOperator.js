//spread operator (...) allows an iterable such as an array or string to be expanded
//into seperate elements (unpacks the element)

//*****for arrays */
let num = [1,2,3,4,5];
let max = Math.max(...num);
let min = Math.min(...num);
//firstly it will unpack each element into a particular digit.
//an then use the function to work on it

//*******for strings */
let s = 'Hello bro';
let letters = [...s].join("-");
console.log(letters);

//we can use spread operator to combine two arrays

let x = [1,2,3,4,5];
let y =[6,7,8,9];

let z = [...x , ...y];//we can also ad extra elemts in z too if we want