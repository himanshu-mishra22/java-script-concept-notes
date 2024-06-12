//ES6 modules = an external file that contains resuable code
                // that can be imported into other javaScript File
                // can contain variables, classes, functions ... and More
                //introduced as part of ECMAScript 2015 update
// to do this we first need to change the type of our script file inside the html file to "module"
// <script type = "module" src = "./xyz.js"></script>


//to import other js class we use import and destructuring method

import {PI, getCircum, getArea} from './mathUtil.js';

console.log(PI);
const cirCum = getCircum(20);
console.log(cirCum);
