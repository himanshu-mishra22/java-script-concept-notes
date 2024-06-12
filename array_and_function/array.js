let y = ['a','b','c'];
let lengthOfArray = y.length;
let index = y.indexOf('a');
console.log(lengthOfArray);
y[2] = 'd';  //adding a new element at a particular array
y.push('d'); //will add a new element at the end of the array
y.pop();//will remove the last element of the array
y.unshift('k');//will add a new element at the starting of the array
y.shift();//to remove an element fro beggining
y.sort();//sort the element alpabetically
y.reverse();//sort the element in reverse order
//****************************** */
//to go through each element of the array we use for loop
for(let i=0;i<lengthOfArray;i++){
    console.log(y[i]);
}

//for each loop
for(let i of y){
    console.log(i);
}