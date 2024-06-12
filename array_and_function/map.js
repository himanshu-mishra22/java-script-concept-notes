//.map() accepts a callback and applies that fuunction to each element of an array than return a new array
// it will give a new array after execution of the program

// const num = [1,2,3,4,5];

// console.log(num.map(square));
// function square(element){
//     return Math.pow(element,2);   
// }
// function cube(element){
//     return Math.pow(element,3);
// }

//**************************** */
// const name = ["himansu", "prakash", "mishra"];
// console.log(name.map(capitalize));
// function uppercase(element){
//     return element.toUpperCase();
// }

// function capitalize(element){
//     return element.charAt(0).toUpperCase() + element.slice(1);
// }

//************************************* */

const date = ["2004-01-09", "2003-03-17", "2001-08-25"];

function formatDate(element){
    const part = element.split("-");
    return `${part[2]}-${part[1]}-${part[0]}`;
}

console.log(date.map(formatDate));