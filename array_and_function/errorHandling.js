// error = An object that is created to represent a problem that occurs.
//occur often with user input or establishing a connection

//try{} = Encloses code that might potentially cause an error
try{
    console.log(x);
    //NETWORK ERRORS
    //PROMISE REJECTION
    //SECURITY ERRORS
}

//catch{} = catch and handle any thrown errors from try{}
catch(error){
    console.error(error);
}

//finally{}
finally{
    console.log("This always executes");
    // CLOSE FILES
    // CLOSE CONNNECTIONS
    // RELEASE RESOURCES
}

console.log("You have reached the end!")


//---------------------------------------------------------
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You cant divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const rresult = dividend / divisor;
    console.log(rresult);
}

catch(error){
    console.error(error);
}

console.log("You have reached the end!");