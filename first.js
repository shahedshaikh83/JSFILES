// console.log("shaikh shahed bhai");
// console.log("shaikh rizwan");
// fullname = "shaikh rizwan";
// age = 24;
// price = 99;
// x = null;
// y = undefined;
// console.log(age);

// let fullName = "shaikh shahed";
// let age = 24;
// let totalprice = 1000;
// console.log(fullName)
// {
//     let a = 5;
//     console.log(a);
// }
// let a = 3
// console.log (a)
// var num  = 99;
// var num = 22;

// let val = 11;
// let val = 

// {
//     let a = 10;
//     console.log(a);
// }

// const age = 24;
// const auther = "shahed"
// let price = 100.50;
// fullname = "shaikh rizwan"
// isFollow = true;

// console.log(isFollow)

// let x = BigInt("123");
// let y = Symbol("Hello!");
// const student = {
//     fullName : "Shaikh Shahed" ,
//     age: 22,
//     cgpa:9.2,
//     ipass: true,
// };

// student["age"] = student["age"] + 1

// console.log(student["age"])

// const product = {
//     title: "Ball Pen" ,
//     rating: 4,
//     offer: 5,
//     price:270,
// };

// console.log(product["offer"]);
// product["offer"] = product["offer"] + 5
// console.log(product.offer)
// const profile = {
//     username: "@shahedshaikh",
//     isFollow: false,
//     followers:123,
//     following:322.
// }

// console.log(typeof profile["followers"])

// console.log("shahed")

// age = 22
// console = 33
// const student = {
//     fullname = "shaikh shahed";
//     age = 22;
//     cgpa = 9.2;
//     ispass = true
// }
// console.log(student.age)

//Arithmatic Operators 
// let a = 5;
// let b = 2;
//we can also print like that
// let c = a + b;
// console.log("a =", a, "& b = " , b)
// console.log("a + b = " , a + b );
// console.log("a - b = " , a - b );
// console.log("a * b = " , a * b );
// console.log("a / b = " , a / b );
// console.log("a % b = " , a % b );
// console.log("a ** b = " , a ** b );

//Unary operator
// let a = 5;
// let b = 2;
// console.log("a =", a, "& b = " , b)

// console.log("++a = ", ++a)
// console.log("a++ = ", a++)
// console.log("a = ", a);
// console.log("--a = ", --a)
// console.log("--a =" ,a)


//assignment operator
// let a = 5;
// let b = 2;
// a+=4;//a= a + 4
// console.log(a);// it should print 9
// b-=5;
// console.log(b)



//coparision operator
// let a = 5;
// let b = 3;

// console.log("5 > 2 ", a > b);

// Logiccal operator
// let a = 6;
// let b = 3;

// let cond1 = a > b; // true
// let cond2 = a=== 6; // true

// console.log("!a<b", !(a < b));


//conditional statement 
// let age = 16

// if( age >= 18 ) {
//     console.log(" you can vote");
// } else {
//     console.log("you can't vote");
// }

// if( age < 18 ) {
//     console.log(" you can not vote")
// }


//odd even statement
// let num = 74;

// if ( num%2 === 0){
//     console.log(num ," is even");
// } else {
//     console.log(num , "is odd");
// }

//syntax -> rules

// let age = 22;

// if (age < 18 ) {
//     console.log("junior");
// } else if ( age > 60 ) {
//     console.log( "senior");
// } else {
//     console.log("middle")
// }


//ternary operator --> compact of if else

// let age = 32
//  let result = age >= 18 ? "adult" : "not adult";

// console.log(result)

//other way to write
// age >= 18 ? console.log("adult") : console.log("not adult");



//practice question 
// let num = prompt ("enter a number")

// if (num%5 === 0 ){
//     console.log(num , "is a multiple of a 5")
// } else {
//     console.log(num, "is NOT a multiple of 5")
// }


//practice question

// let studentscore = prompt("Enter your score(0-100)");

// if (studentscore >= 90 && studentscore <= 100){
//     console.log( "Grade 'A'" )
// } else if ( studentscore >= 70 && studentscore <= 89){
//     console.log( "Grade'B'")
// }else if ( studentscore >= 60 && studentscore <= 69){
//     console.log( "Grade'C'")
// }else if ( studentscore >= 50 && studentscore <= 59){
//     console.log( "Grade'D'")
// }else ( studentscore >= 0 && studentscore <= 49);{
//     console.log( "Grade'F'")
// };


// console.log(a);
// var  a = 12

//A discount is applied if the customer is a member OR has a coupon code.

// let isMember = true;
// let hasCoupon = true;
// // Write a condition using ||

// if (isMember === true || hasCoupon === true ) {
//     console.log ("yee, discount applied.")
// }else {
//     console.log( "oops, discount not applied.")
// }
     

// let isDoorLocked = true;

// if (!isDoorLocked) {
//     console.log("Alarm ringing! Door is not locked.");
// }else {
//     console.log ("not ringing ! door is closed")
// }


// //ticket price based on age

// let age = 50

// if ( age < 18 ){
//     console.log("@150")
// }else if ( age <= 60){
//         console.log("@250")
// }else {
//         console.log("@200")
// }
    
//A water supply company charges:

// ₹10 per 1000 liters if usage ≤ 5000 liters

// ₹15 per 1000 liters if usage is between 5001 and 10000 liters

// ₹20 per 1000 liters if usage > 10000 liters

// let usage = 5003;

// if(usage <= 5000){
//     console.log("@10")
// }else if ( usage >= 5001 && usage <=10000){
//     console.log("@15")
// }else if ( usage > 10000){
//     console.log("@20")
// }

// let usage = 77500; // in liters
// let rate;
// let bill;

// //Decide rate based on usage
// if (usage <= 5000) {
//     rate = 10;
// } else if (usage <= 10000) {
//     rate = 15;
// } else {
//     rate = 20;
// }

// //Calculate bill (usage in liters → divide by 1000 to get rate units)
// bill = (usage / 1000) * rate;

// console.log(`Water usage: ${usage} liters`);
// console.log(`Rate: ₹${rate} per 1000 liters`);
// console.log(`Total Bill: ₹${bill}`);
// console.log(bill)


// //chapter 3

{
    let a = 11
    
}


console.log(a)