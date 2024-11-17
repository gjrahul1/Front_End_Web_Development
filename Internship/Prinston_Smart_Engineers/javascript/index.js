console.log("Hello World");

//Data Types In Javascript

//var, let, const

//var

var firstName = "Hi";

var Age = 12;

var avg = 23.2;

var isAdult = true;

//variables defined using var keyword
//those variables have global scope

//let

let umoNo = 818181;
let results = 78.9;
let surname = 'Y';

//variables defined using let keyword
//let has local scope

console.log(surname);

console.log(`The UmoNo is ${umoNo} and result is ${results}`);

const pi = 3.142;

// pi = pi +1;

console.log(pi);

//Data Structures

//Arrays and Objects (JSON)

//JSON - javascript object notation

var fruits = [1,2,5,6,12.3421,true,"Hello",'a']

console.log("Element is at 4th postion",fruits[4])

//Operations on Arrays

//Insertion

var sample = [1,2,3,4];

console.log("Initial Array:",sample)

sample.push(5);

console.log("After Modification:",sample);

var list=[100,121,321];

console.log("Elements before pop: ",list)

list.pop();

console.log("Elements after pop:",list)

//To insert or delete item/element of an array from any desired location 

//We use a common function called as splice();

var orders = [200,212.455];

console.log("Before Splice",orders)

//Syntax of splice (starting index,delete count, newValues)

//delete count = 0; not deleting any element

orders.splice(1,0,1000);

console.log("After Splicing",orders);

orders.splice(1,0,1000,1001);

console.log(orders);

//Deleting the ele from desired loc

orders.splice(3,1);

console.log(orders)

//Sort Operations - sort is callback function

//CallBack, a function which calls back / inherits another function is callBack

var randomArray = [122,3,1,332];

//()=>{} calling another function

//()=>{} is similar to function test(){} - Optimized soln

var sortedArray=randomArray.sort((l,u)=>{

    return l-u;
})

console.log(sortedArray)


//Array of objects

//objects are very benificial when we have to store userinfo or product info or any other similar use cases.

var Userone = {
    fullName:"Akash",
    lastName:"L",
    bloodGroup:"A",
    education:"BE",
    dob:"12/2/2000",
    address: {
        pincode: "877",
        landmark:"test",
        state:"Karnataka",
    }
}

console.log(Userone)

//Address is another object

//Destructing of an object

var {dob}=Userone;

console.log("dob:",dob)

//Array Of Objects

var products = [{id:1,price:100},{id:2,price:101},{id:3,price:102}]

console.log(products)

