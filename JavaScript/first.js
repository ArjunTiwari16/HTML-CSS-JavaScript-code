console.log("Welcome to Apana College");
console.log("Mr Shyam ");
let age = 24;
age = 51;
console.log(age);
let fullname = "Tony Stark";
console.log(fullname);
let x = null;
let y = undefined;
console.log(y);
let isFollow = true;
const PI = 3.14;
console.log(isFollow);
let a = BigInt("123");
console.log(a);
let b = Symbol("Hello");
console.log(b);

//object

const student = {
    Name : "Rahul Kumar",
    age : 50,
    cgpa : 9.2,
    isPass : true
};
console.log(student);
student["Name"] = "Shyam";
student.age = 21;
console.log(student.age);
console.log(student["Name"]);

// arrays

let arr = [96,54,85,63,24];
console.log(arr);
console.log(arr[2]);
arr[2] = 55;
console.log(arr[2]);

console.log("using for loop");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("using for of loop");
for(let i of arr){
    console.log(i);
}

console.log("using for in loop");
for(let index in arr){
    console.log(index, arr[index]);
}

//methods

let fooditems = ["apple","banana","orange","litchi"];
console.log(fooditems);
fooditems.push("pineapple","guava");
console.log(fooditems);
fooditems.pop();
console.log(fooditems);

//making entire array into string
console.log(fooditems.toString());
let heros = ["iron-man","thor","black-windos"];
console.log(heros);

// cocat two string
let combineString = fooditems.concat(heros);
console.log(combineString);

//adding element at front of array
heros.unshift("ant-man");
console.log(heros);

//slice array
// it not change in acctual array
console.log(heros.slice(1,3));

let brr = [1,2,3,4,5,6,7,8,9];
console.log(brr);
//splice array
//it change in actual array
//splice(kis index se start hoga,kitane number ko delete karega,replace value);
brr.splice(1,2,101,102);
console.log(brr);


//-------------------------------Function--------------------------------------------

console.log("Hello World");
"abc".toUpperCase();
[1,2,3].push(4);

function myFunction(){
    console.log("Welcome to India");
    console.log("We are learing js");
}
myFunction();

function sum(a, b){
    //let c = a+b;
    // console.log(c);
    return a+b;
}
// sum(5,6);
console.log(sum(5,6));

// ---------------------------------arrow function -----------------------------------------

const multiplication = (a,b) =>{
    console.log(a*b);
    // return a*b;
}
// console.log(multiplication(2,4));
multiplication(2,4);