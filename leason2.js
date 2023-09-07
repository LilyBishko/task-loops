// operators.arrays.type conversions.conditional statement
//OPERATORS
// unary - один елемент
let a = 5;
console.log(a); // 5
console.log(a-2); // 3
// binary - два елементи
let a = 4;
let b = 2;
console.log (a-b);

// arithmetic operators
// addition +
const a = 5;
console.log(a + 1); // 6
// subtration -
const a = 11;
console.log(a-2); // 9
// multiplication *
let a = 2;
console.log(a*6); // 12
// division /
let a = 3;
console.log(a*2); // 6
// division modulo % остача при діленні (наприклад 8:4 буде 0 але остача при діленні 9:4 буде 1)
console.log(9 % 4); // 1
// increment ++ (збільщує на 1) префікс
let m = 4;
let n = ++m;
console.log(n); // 5
//  другий варіант
let m = 5;
let k = m++;
console.log(k); //5
console.log(m); //6
// exponenntiation **
console.log(2**4); // 16 (2*2*2*2)

// string addition
let a = "sun";
let b = "shine";
let res = a + b;
console.log(res); // "sunshine"
// якщо один є стрінгом то другий прирівняється до стрінга
let a = "Lily";
let b = 27;
let res = a + b;
console.log(res); // "Lily27"
// якщо використовувати віднімання чи ділення то тоді другий елемент прирівняється до number

// asigment operators
let a = 10 - 7;
console.log(a); // 3
// modify-in-place
let y = 5;
y +=2;

// COMPARSION OPERATORS
/* 
== equals
!= not equal
> greater 
< less
*/
// треба використовувати === для точності


// LOGICAL OPERATORS
/*
|| - or або один елемент має бути тру тоді працює
&& - and і обидва елементи мають бути тру тоді працює
! - not ні - заперечення
*/

// CONDITIONAL OPERATORS
// ? : (conditional) умова ? значення якщо умова істина : значення якщо умова хибна;
const x = 30;
const y = 50;
result = (x > y) ? 500 : 1000;

// TYPE CONVERTIONALS
// convert
let a = 3;
let data = string(a);
console.log(data); // 3
console.log(typeof data); // string
// так само з number boolean 
// до number можна конвертувати з + +а
// parseInt() перетворює рядок у число
// parseFloat() перетворює у десяткове число