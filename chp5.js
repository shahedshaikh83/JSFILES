console.log ( "chapter 5 - functions and method ")

// functions un js 

// function myfunction(){                            // yaha maine function create kara.
//     console.log ( "welcome to Tech Titans ")
//     console.log ( "we are learning  JS language. ")
// }

// myfunction(); // ise function ko call karna bhi bolte aur invoke karna bhi bolte...


// function myfunction(messege){  //ise parameter --> input bolte 
//     // function defination ke andar jo variable hota hai wo parameter hota hai jaise yaha " messege "
//     console.log( messege )
// }

// myfunction( " i am learning java script. ")  //--> argument 

// function call ke andar hum jis value ko pass kar dete hai use hum "argument" kahte hain. jaise yaha "i am learning java script." hain.


//////////////////////////////////////////////////////////////////////////////////////////

// Function --> 2 num , sum 

// function sum ( x , y ){
//     console.log( x + y );
// }


// function sum( x , y) { // ye x, y fun. act as local variable jo isi block of code ke andar aata hain
//     s = x +y;
//     console.log( "before return ") // --> only return ke pahele ka code print hota..
//     return s;
//     //console.log ( "after return ") --> ye code print nahi hoga return ke baad koi bhi code print nahi hota 
// }
// let val = sum( 45 , 5 );
// console.log ( val );


//////////////////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTION --> (compact way of writing function)

// const ARROWSUM = ( a , b ) => {
//     console.log ( a + b )
// }

// // multiplication arrow fun 
// const mul = ( x , y ) => {
//     return (  x * y )
// }

// const printhello = () => {
//     console.log ("hello")
// }


/////////////////////////////////////////////////////////////////////////////////////////
// prac. que.
//1.Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

// 2. Qs. Create an arrow function to perform the same task.

// function countvowels(str){
//     let count = 0;
//     for ( const char of str) {
//         if ( char === "a" || char === "i" || char === "o" || char === "u") {
//          count++
//         }
//     }
//     console.log ( "vowels in your sentence is" , count )
// }

// by arrow function 
// const countvow = (str) => {
//     let count = 0;
//     for ( const char of str ){
//         if ( char === "a" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     return ( " vowels in your sentence is " , count )
// }


///////////////////////////////////////////////////////////////////////////////////////
// FOREACH CALLBACK FUNCTION 

// let arr = ["kaij", "beed", "parli" , "latur"];

// arr.forEach(function printval(val){
//     console.log( val.toUpperCase() )
// });

//////////////////////////////////////////////////////////////////////////////////////////
// BY ARROW FUNCTION
// let arr = ["kaij", "beed", "parli" , "latur"];
// arr.forEach( (val , idx) => {
//     console.log ( idx ,val , arr )
// });


/////////////////////////////////////////////////////////////////////////////////////////
// PRAC QUE. FOR THE GIVEN ARRAY OF THE NUMBERS , PRINT THE SQUARE OF EACH VALUE USING THE FOR EACH LOOP??

// let arr = [ 1, 2, 3, 4, 5 , 9]
// arr.forEach(arr => {
//     console.log(arr*arr)
// });

/////////////////////////////////////////////////////////////////////////////////////////
// array filter 

// let num = [ 1, 2, 3, 4, 5 , 9]
// let even = num.filter((val) =>{
//     return val%2 ===0;
    
// })
// console.log(  "this is a even ",even)

////////////////////////////////////////////////////////////////////////////////////////
// ARRAY REDECE 
// let num = [ 1, 2, 3, 4 ]
// let output = num.reduce( ( pre , curr) =>{
//     return pre + curr;
// })
// console.log ( output )

///////////////////////////////////////////////////////////////////////////////////////
// if we want big element in array 

// let num = [ 1, 2, 3, 4 ,65, 85, 43 ]
// let output = num.reduce( ( pre , curr) =>{
//     return pre > curr ? pre : curr;
// })
// console.log ( output )

//////////////////////////////////////////////////////////////////////////////////////////
//Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+. [87,93, 64, 99, 86)

//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.

//Use the reduce method to calculate sum of all numbers in the array.

//Use the reduce method to calculate product of all numbers in the array.

// let marks = [87,93, 64, 99, 86 , 97, 91];
// let highmarks = marks.filter((val) => {
//     return val > 90
// }) 

// console.log ( highmarks )

let n = prompt( "enter any number : ")
let arr = [];
for ( i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log ( arr )

let sum = arr.reduce((prev , curr)=>{
    return prev + curr;
});

console.log( "sum =" , sum )

let factorial = arr.reduce((prev , curr)=>{
    return prev * curr;
});

console.log( "factorial =", factorial )