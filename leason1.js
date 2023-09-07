// Data Types. Numbers
let x = 3;
// Data types. String
let string = "Hello Lily!";
// Data Types. Boolean
let isValid = true;
let notValid = false;
//Data Types. Null
let myVariable = null;
// Data Types. Undefined коли змінна не була призначена
// Data Types. Object
const newObj = {};
const user = {
    firstName: "Lily",
    age: 27,
    email: "lilybishko@gmail.com"
}
//TypeOf визначає належність до групи
let firstName = "Lily";
console.log(typeof firstName); // string

let age = 27;
console.log(typeof age); // number

// alert - вистрибує вікно, тільки натиснути окей
alert("Hello Lily");

// prompt - треба вписати значення
const yourName = prompt("What is your name?");
alert(yourName);

// confirm - вписати значення і перевірка тру чи фолс
const isAdmin = confirm("Are you an admin?");
alert(isAdmin);