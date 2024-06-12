//Synchronous = executes line by line consecutively in a sequential manner
// code that waits for an operation to complete.

//asynchronous = allows multiple operations to be performed concurrently without waiting
// doesnt block the execution flow and allows the program to continue


// (i/o operations, networ requests, fetching data)
// handled with: callbacks, promises, Async/Await


//synchronous codes
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

//asynchronous code
setTimeout(()=> console.log("Task 4"),3000);


//since the following function is asynchronous and if we want the function to perform the code in synchronous manner

function func1(callback){
    setTimeout(()=> {console.log("Task 1");
                    callback()},3000);
}

function func2(){
    console.log("TAsk 2");
    console.log("TAsk 3");
    console.log("TAsk 4");
}

func1(func2);