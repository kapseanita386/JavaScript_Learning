// working with numbers in JS

//let x new Number(100);
let x=100;    //Interger
let y=10.11;  //Decimal
let z=11e1;   //Exponencial

console.log(x,y,z);

//isInteger()- used to identify the given number is integer or not
 
console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));
// parseInt() - Used to convert a string into Number
let str = "123";
console.log(typeof(str));
console.log(typeof(Number.parseInt(str)));

//parseFloata()- used to convert a string into float
str="11.23";
console.log(typeof(str));
console.log(typeof(Number.parseFloat(str)));

// toString()- used to convert number into string

let n=110;
console.log(typeof(Number.toString(n)));
