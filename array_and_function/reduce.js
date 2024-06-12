//.reduce() reduces the element of an array to a single value
//takes two value "function fun_name(accumulator,element){}""
//accumulator ==> takes the previous value of the element 
//element ==> takes the next value of the array
//the resultant value is stored in the accumulator and element takes the next value
//and the process keeps executing.

// const prices = [5,15,10 ,30,54];
// console.log(prices.reduce(sum));
// console.log(prices.reduce(getMax));
// function sum(acc,element){
//     return acc + element;
// }

// function getMax(acc,ele){
//     return Math.max(acc,ele);
// }

//using reduce method to eleminate the duplicate elements in an array
// const array = [1,1,1,2,2,4,4];
// const arrayNoDuplicates = array.reduce(function(acc,ele){
//     if(!acc.includes(ele)){
//         return [...acc,ele];
//     }
//     return acc;
// })

