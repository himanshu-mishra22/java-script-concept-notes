//forEach method is used to itearte over the elements of an array and apply a specified function (callback) to esch element
// array.forEach(callback)

// let num = [1,2,3,4,5,6,7,8,9];
// num.forEach(double);
// num.forEach(display);

// function display(element){
//     console.log(element);
// }

// function double(element, index, array){
//      array[index] = element*2;
// }

//************************** */

let x = ["apple","mango","banana","coconut"];

function uppercase(element, index, array){
    array[index] = element.toUpperCase();

}
function display(element){
    console.log(element);
}
function capitalize(e,i,x){
    x[i] = e.charAt(0).toUpperCase()+e.slice(1);
}


x.forEach(capitalize);
x.forEach(display);