
fullname = "Anita";  //variable decalration & Initialization
age=24;
x=null;
y=undefined;
isFollow=true;    //blooen 

var age=12;   //var keyword can be redeclared & Updated
var age=25;
let price=10;    //let keyword can not be redeclared but can be Updated

console.log(typeof(price));  //shows which data is holding in price
console.log(typeof(number));


console.log(x);
console.log(y);
console.log(fullname);

console.log("My New JavaScript");
console.log("Welcome to JavaScript");

console.log(age);
const student={
    fullname:"Anita Kapse",
    age:24,
    cgpa:9.1,
    ispass:true
};
console.log(student);      // accessing object
console.log(typeof(student));   // shows datatype of object
console.log(student.age);         //accessing key in object one way
console.log(student.fullname);
console.log(student["cgpa"]);      //accessing key in other way