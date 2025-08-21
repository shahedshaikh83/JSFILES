console.log ( " chap 7 DOM part 2 ")

// let div = document.querySelector( "div" );
// console.log( div );

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name)

// // ANOTHER METHOD TO DO THAT 

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"))  //--> TO GET ATTRIBUTE.

// console.log(para.setAttribute("class" , "new class")); //--> TO SET ATTRIBUTES. OR CHANGE.



// let div = document.querySelector( "div" );

// div.style.backgroundColor = "#03fcf0"
// div.style.fontSize = " 20px "
// div.innerText = " hello "

//////////////////

let newbutton = document.createElement("button");
newbutton.innerText = "click me";
console.log( newbutton )

let div = document.querySelector("div");
div.append(newbutton); //--> ADDS AT THE END OF NODE (INSIDE)
// div.prepend(newbutton);//--> ADDS AT THE START OF NODE (INSIDE)
// div.before(newbutton);//--> ADDS AT THE BEFORE OF NODE (OUTSIDE)
// div.after(newbutton);//--> ADDS AT THE AFTER OF NODE (OUTSIDE)

//LETS ADD A NEW HEADING 
let newheading = document.createElement("h1");
// newheading.innerHTML = "<i> i am a mew </i>"
newheading.innerText = " i am a new "

document.querySelector("body").prepend(newheading)

/////////////////
//REMOVING ANYTHING 

let para = document.querySelector("p");
para.remove();

newheading.remove();