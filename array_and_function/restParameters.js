//rest parameters = (...rest) allow a function work with a variable number of argument by bundling them into an array
// IT ONLY BE WORKS AS PARAMENTS FOR A USER DEFINED FUNCTIONS
//opposite of spread operator 
//spread= expands an araay into seperate elements
//rest = bundles seperate elements into an array

function num(...n){
    console.log(...n)
}


const x =1;
const y =2;
const z =3;
const a =4;
const b =5;
const c =6;
const d =7;

num(x,y,z,a,b,c,d);


//function to add several numbers together using rest parameters
function sum(...num){
    let result =0 ;
    for(let i in num){
        result += i;
    }
    return result;
}
function getAvg(...num){
    let result =0 ;
    for(let i in num){
        result += i;
    }
    return result/num.length;
}

const total = sum(1,2,3,4,5,6,7,8,9);
const avg = getAvg(1,2,3,4,5,6,7,8,9)
console.log(total);
console.log(avg);

//*************combining strings*********
function combStrings(...strings){
    return strings.join(" ");
}
const fullName = combStrings("himanshu","prakash","mishra");
console.log(fullName);

