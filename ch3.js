// loops in javascript
// console.log("chapter 3 ")
// for ( let count = 1; count <= 50; count++){
//     console.log ("shaikh shahed")
// }


// //calculate sum of 1-5
// let sum = 0
// for( let i=1; i<=5; i++){
//     sum = sum +i;
// }
// console.log("sum =", sum)

//calculate sum of 1-5
// for( let i = 1; i <= 5; i++){
//     console.log("i = " , i)
// }
// let i = 0;
// while( i <=5 ){
//     console.log( "i =" , i);
//     i++
// }

// let i = 1
// do {
//     console.log( "i = ", i );
//     i++;
// } while ( i <= 5);

//for-of loop 

// let str = "shahed"
// let size = 0
// for( let i of str ){
//     console.log("i =", i );
//     size++
// }

// console.log("string size = " , size )

// for in loop --> object aur array ke liye use hote hai

// let student = {
//     fullname : "shahed",
//     age : 22,
//     cgpa : 9.9 ,
//     ispass : true
// };  

// for ( let key in student){
//     console.log("key = ", key , "value = ", student[key]);
// }



// pracice qus.
// print all even numbers form 0 - 100?
// for ( let num = 0; num <=100; num++ ){
//     if ( num%2 === 0){
//         console.log("even = ", num )
//     }else{
//         // console.log( "odd")
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////
//practice ques. 2 
// create a game where you start with any random game number.ask the user to to keep guissing the game number untill the user entrer correct value . 

// let gamenum = 44;

// let usernum = prompt( "guess the game number ");
// // console.log(usernum)

// while ( usernum != gamenum ){
//       usernum = prompt("you entered wrong number . Guess agin...    ");
// }
// console.log("congratulation you entered right number");







////////////////////////////////////////////////////////////////////////////////////////
//strings

// let str = 'shaikh shahed'
// let str2 = ' rizwan shaikh '
// console.log(str[2])

//template literal
// let str = 'shaikh shahed'
// console.log ( 'shaikh\nshahed')
// console.log ( str.length)

//object

// const student = {
//     fullname : "shaikh shahed" ,
//     age : 20 ,
//     cgpa : 9.2,
//     ispass : true ,
//     id : 652468

// }





// student["age"] = student["age"] + 1
// student["fullname"] = student["fullname"] +  " shakil"

//a + b 
// a = c

//   + , - * /

// let a = 7 ;
// let b = 2 ;
 
// console.log ( "a + b = " , a + b);
// console.log ( "a - b = " , a + b);

//modulus %

// prac 1 to print num from 1 to 100 

// for ( let num = 0; num<=100; num++) {
//     // console.log ( "num = ", num)
//     if (num%2 !== 0 ){
//         console.log ( "num is odd = ", num);
//     }else {

//     }
// }

// let a = 5 
// let b = 3 

// console.log("a-= -->" ,a-=1 )  
// console.log("a*= -->" ,a*=2 )
// console.log("a%= -->", a%=2 )
// console.log("a**= -->", a**b)

// let a = 5 ;
// let b = 3 ;

// let cond1 = a>b;
// let cond2 = a ==5;
// console.log( cond1 && cond2)


// let a = 3;
// let b = 5;

// let cond1 = a>b;
// let cond2 = a== 6;
// console.log ( cond1 || cond2 )

// let a = 5
// let b = 2
// console.log ( a + b )
// console.log ( a - b )
// console.log ( a * b )
// console.log ( a / b )

//modulus
// console.log ( a % b)
// console.log( a**b )

// 

// let age = 12;

// if ( age>18){
//     console.log( "you can vote")
// } else if ( )

//condition?trueoutput:falseoutput;
// let age = 12;
// let result = age>18?"adult":" not adult";
// console.log (result)

// let nub = "Six";
// let secondnum = 6

// console.log(nub == secondnum    )


// let a = 10
// let b = "10"
// console.log(a === b) lert lkjilkj sdlkjidklj kdfoijf ;oiu joij lsfkjodflk 0ifokjdf o;sidjf origin;kojl;kdjfijf sidjfdlkj debuggerdjkl;dsjksdfl;jskdl;

let obj = {
    item: "pen",
    price:10,
};

console.log("the cost of ", obj.item , "is", obj.price , "rupees")

console.log(`the cost of ${obj.item} is ${obj.price}`)