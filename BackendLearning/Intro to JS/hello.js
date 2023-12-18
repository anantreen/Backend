// print statement in JS 
console.log("hello");
process.stdout.write("hello ");
process.stdout.write("panjab");

/*
JavaScript provides eight different data types 
which are undefined, null, boolean, string, symbol, 
bigint, number, and object.
*/
console.log("Sat Sri Akaal");
console.log(`Ram Ram Ji Sarya Ne`);
console.log(12.5);
console.log(-7.9);
console.log(0);
console.log(-0);
console.log({Name:"Anant",Age:21});
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);

// typeof fun of data 
console.log(typeof null); // corner case -> object
console.log(typeof undefined);//undefined
console.log(typeof -14.5);//number
console.log(typeof false);
console.log(typeof {Name:"Anant",Age:21});//object
console.log(typeof `Anant`);//string
console.log(typeof $); // undefined
console.log(typeof NaN); // number
var anant,preet,singh,reen;
console.log(typeof reen);//undefined
//corner case
console.log(typeof typeof 15);

// arithmetic operators
console.log(10 + 2);//addition
console.log(10 - 2);//subtraction
console.log(10 * 2);//multiplication
console.log(5 / 2);//division
console.log(9 % 2);//remainder
console.log(2**3);//power

// logical operators
console.log(0 && 4); // 4
console.log(0 || 4); // 0
console.log(2 && 4); // 2
console.log(2 || 4); // 4
console.log(2 && -4); // 2
console.log(-2 || 4); // 4

// comparison operators-> < > >= <= === == != !==


// string based operators -> +
console.log("Anant"+"Preet");

// bitwise operators -> & | ^ ~ << >>
console.log(5&3);
console.log(5|4);
// woeks on bits

// ternary operator
var ans = (81>199)?"Anant":"Sifat";
console.log(ans);


"use strict";
var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    // content = "JS";
    console.log(teacher);
    // console.log(content);
}
function gun() {
    var student = "Sarthak";
    console.log(student);
}
fun();
gun();
console.log(teacher);
// console.log(content);

const o = { p: 1, p: 2 }; 
console.log(o);


function sumAll(startIndex, endIndex) {
    var sum = 0;
    for (var i = startIndex; i<= endIndex; i++) {
    sum += i;
    }
    return sum;
}
var sum = sumAll(1, 2);
console.log(sum);

function sum (index1, index2) {
return index1 + index2;
}
function multiply (index1, index2) {
return index1 * index2;
}
function divide (index1, index2) {
return index1 / index2;
}

function complexFn(n) {
    let sum = 0;
    for (var i = 0;i<n;i++){    
        sum += 1;
    }
    return sum;
}
var a = readFromAFile();
complexFn(a);

//JS Closure
function outer() {
    const name = "Paul";
    function inner() {
      console.log("Hello, " + name + "! Welcome to paulsblog.dev");
    }
    return inner;
  }
  
const sayHello = outer();
sayHello(); // logs "Hello, Paul! Welcome to paulsblog.dev" 

// callBack JS 
// ~ function mein fuction === {callBack + setTimeout(async)}
function fetchData(callback) {
    ///Simulate fetching data asynchronously
    setTimeout(() => {
        const data = "Async data";
        callback(data);
    }, 1000);
}
fetchData(result => {
    console.log(result);
});

// it will not go to event loop
function greet(name, callback) {
  console.log(`Hello, ${name}!`)
  callback();
}
function farewell() {
  console.log("Goodbye!")
}  
greet("John", farewell)

// stopwatch js code {ticking time} 
var counter = 1;
function start(){
  console.clear();
  console.log(counter);
  counter++;
}
setInterval(start, 1000);

// confusion {async vs multi-threading}
var counter = 1;
function start(){
  console.clear();
  console.log(counter);
  counter++;
}
setInterval(start, 1000);

///complex long task - keeps js counter busy 
///so async not working 
var counter2 =0;
for(var i=0;i<100000000;i++){
    counter2 = counter2+1;
}
console.log(counter2);
  
// JS Runtime ~ call stack , web apis , callback queue , event loop
///http://latentflip.com/loupe/
function print(){
    console.log("print");
}
function a(){
    console.log("a");
}
function b(){
    console.log("b");
}
function c(){
    console.log("c");
}
a();
b();
c();

