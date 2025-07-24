
let s="Welcome";      //defining string

//let s= new String();      //defining string
//charAt()-method used retrive chart at specific index

console.log(s.charAt(1));

//concat()-two concatenate two stings
console.log(s.concat(" to the Java Script Programming"));
console.log(s.concat(" to the Java Script").concat("Programmming Language"));

//replace()- we can replace specific string to new string

s="Wel come to the javascript";
console.log(s.replace("javascript","java"));

//substring()- using this method we can extract some portion from the actual string

s="welcome";
console.log(s.substring(0,3));
console.log(s.substring(3,7));

//toLowerCase() & toUpperCase() - use to change case conversion
s="WELcome";
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//split()- split the string in multiple part
s="Welcome to the JavaScript";
let arr=s.split(' ');
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

//trim()- to trim the space 
s="   Welcome   ";
console.log(s.trim());