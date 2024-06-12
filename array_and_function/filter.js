//.filter() creates a new array by filtering out elements
// it firstly checks if the given condition is true and return the element which is iterated as true

// const age = [15,16,17,18,67,36,35,25];
// console.log(age.filter(isAdult));

// function isAdult(element){
//     return element >=18;
// }

//*************************** */
const words = ["apple", "banana", "kiwi", "orange", "pomegranate", "coconut"];
console.log(words.filter(getShortWords)); //will show the element => [ 'apple', 'kiwi' ]
console.log(words.map(getShortWords));// will iterate through all the elements of the array =>[ true, false, true, false, false, false ]


function getShortWords(ele){
    return ele.length <=5;
}

