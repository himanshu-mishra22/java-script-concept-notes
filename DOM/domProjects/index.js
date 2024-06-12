//STEP 1 TO CREATE A ELEMENT
const newH1 = document.createElement("h1");



//STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "MY NAME";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";



//STEP 3 APPEND ELEMET TO DOM
// document.body.append(newH1); //will add to the last in the body
//document.body.prepend(newH1); // will add to the top



document.getElementById("box1").append(newH1); //will get inside the box1 and same for other boxes int he last of the box
// document.getElementById("box1").prepend(newH1); //will get inside the box1 and same for other boxes in the top of the box

//what if element dont have an id
//we will use querySelectorAll

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[1]); //will add the heading between the box 1 and 2






//REMOVE HTML ELEMENT

// document.body.removeChild(newH1);


//if it is inside the box:
document.getElementById("box1").removeChild(newH1);