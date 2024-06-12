//eventListener = Listen for specific events to create interactive web pages 
//.addEventListener(event, callback);


const myBox = document.getElementById("myBox");



//events: click, mouseover, mouseout
function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!🤕";
}


myBox.addEventListener("click", changeColor);

myBox.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "yellow";
            event.target.textContent = "Don't Touch!😡"
})

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Click me😉";
    
})

//events: keydown, keyup

const moveAmt = 10;
let x = 0;
let y = 0;



document.addEventListener("keydown",event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp" :
                y -= moveAmt;
                break;
            case "ArrowDown" :
                y += moveAmt;
                break;
            case "ArrowLeft":
                x-=moveAmt;
                break;
            case "ArrowRight":
                x += moveAmt;
                break;
            
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})
