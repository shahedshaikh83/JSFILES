console.log("shaikh shahed chapter 4")


// let mark = [ 97, 96, 83, 64, 77];
// mark [2] = 33
// console.log ( mark)
// //printeed using for loop...
// for ( let indx = 0; indx < mark.length; indx++){
//     console.log ( mark[indx] )
// }


// console.log ( mark.length) // property 

// let heroes = ["iron man", "hulk", "captain america", "shaktimaan", "thot", "antman ", "g-one"];

// for ( let ind =0; ind < heroes.length; ind++){
//     console.log ( heroes [ind])
// }
// console.log ( heroes)

//////////////////////////////////////////////////////////////////////////////////////////

// printing using for of loop...

// let cities = [ "Delhi" , "pune", "mumbai", "hyderabaad", " gurgaon"];

// for ( let city of cities){
//     console.log ( city.toUpperCase() );  // if we want all written in uppercase
// }

/////////////////////////////////////////////////////////////////////////////////////////


// prac q. 
//1. for a given array with a mark of student --> [85, 97, 44, 37, 76, 60 ] find the average marks of entire class ???

// let marks = [ 85, 97, 44, 37, 76, 60 ]

// let sum = 0; 
// for ( let val of marks) {
//     sum += val;              // sum = sum + val;
// }

// let avg = sum / marks.length;
// console.log ( `average marks of the class = ${avg}` )


//////////////////////////////////////////////////////////////////////////////////////////

//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.






// let fooditems = [ "potato", "chips", "tomato "]
// console.log( fooditems)
// console.log( fooditems.toString())


// let marvalheroes = [ " thor", "hulk", "spiderman"]
// let dcheroes = [ "superman", "batman"]
// let indianheros = [" shaktimaan", "krish", "g-one"]

// let heroes = marvalheroes.concat( dcheroes, indianheros)
// marvalheroes.unshift("antman")
// console.log( marvalheroes.slice(1 , 3) )

////////////////////////////////////////////////////////////////////////////////////////

// use of splice
// let arr = [1, 2, 3, 4, 5, 6, 7]
// arr.splice(3, 2, 11, 12)

// add element only 
// arr.splice( 2, 0, 1111);

// delete element only 
// arr.splice( 3, 1);

///////////////////////////////////////////////////////////////////////////////////

// practice question 2
// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a.Remove the first company from the array

//b. Remove Uber & Add Ola in its place

//c. Add Amazon at the end

let companies = [ "bloomberg ", "microsoft", "uber", "google", "IBM", "netflix"];
//  companies.shift();
// console.log ( companies );

//  companies.splice( 2, 1, "ola" )
companies.push( " amazon ")
console.log ( companies )
