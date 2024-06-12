// element selectors =  Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements from the DOM

// document.getElementById() // ELEMENT OR NULL
// document.getElementsByClassName(); //HTML COLLECTION
// document.getElementsByTagName(); //HTML COLLECTION
// document.querySelector(); //ELEMENT OR NULL
// document.querySelectorAll(); //NODELIST

//document.getElementById()---------------------
// const myHeading = document.getElementById("heading");
// myHeading.style.backgroundColor = "red";
// myHeading.style.textAlign = "center";

// document.getElementsByClassName();----------------
// const fruits = document.getElementsByClassName("fruits");
// fruits[0].style.backgroundColor="red";

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

//no forEach can be applied inside 

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// document.getElementsByTagName();------------------------
// const h4element = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// h4element[0].style.backgroundColor = "red";

// // for(element of liElements){
// //     element.style.backgroundColor = "lightgreen"
// // }

// Array.from(liElements).forEach(element =>{
//     element.style.backgroundColor ="lightgreen";
// });

// document.querySelector();------------------------
//takes the first element of the class/tag we are selecting

// const element = document.querySelector(".fruits");
// element.style.backgroundColor = "red";

// document.querySelectorAll();------------------------
//enables all the functions/methods
