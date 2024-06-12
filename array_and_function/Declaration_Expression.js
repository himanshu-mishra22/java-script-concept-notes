//function declaration = defines a reusable block of code that performs a specific task

// function hello(){
//     console.log("Hi");
// }

//function expression = a way to define function as values or variables

// const hey = function(){
//     console.log("hi");
// }

// hey();

//*************************** */
const numbers = [1,2,3,4,5];

const square = numbers.map(function(element){
    return Math.pow(element,2);
});

const evenNums = numbers.filter(function(element){
    return element%2===0;
})

const sum = numbers.reduce(function(acc,ele){
    return (acc+ele);
})
console.log(sum);
console.log(evenNums)
console.log(square);



//used in 
//1. Callbacks in asynchronous operations
//2.High-order functions
//3.Closures
//4.Event listeners