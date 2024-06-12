//callbacks == A callback is a function passed as an argument to another function
//             This technique allows a function to call another function
//             A callback function can run after another function has finished


//avaScript functions are executed in the sequence they are called. Not in the sequence they are defined.



// function hlo(){
//     console.log("Hello");
// }

// function bye(){
//     console.log("bye");
// }

// hlo();
// bye();

//hello
//bye


//********** */
// function display(string){
//     console.log(string);
// }

// function myFirst() {
//     display("Hello");
//   }
  
//   function mySecond() {
//     display("Goodbye");
//   }
  
//   mySecond();
//   myFirst(); 

  //it ensures that the function called first will invoke first and the next function invoked will call after it.


//   function hello(callback){  //jo function doosre function ko call krega usme callback() method use krna jaroori hai
//     callback();             //jiss bhi position pr call back lga hoga usi position pr doorsa wala function invoke hoga
//     console.log("hello");
//     callback();                //jitni baar callback likhoge utni baar called function inkove hoga
//   }

//   function wait(){
//     console.log("wait");
    
//   }
//   function leave(){
//     console.log("leave");
    
//   }

//   function goodbye(){
//     console.log("goodbye");
//   }



// hello(leave);


//************************** */

function sum(callback,x,y){
    let result = x+y;
    callback(result);  //returning result in different function
}

function display(result){
    console.log(result);
}

sum(display,1,2);

//used to handle asunchronous(operatins that takes times to execute) operations:
//  1. reading a file.
//  2. Network requests.
//  3. interacting with databases.



