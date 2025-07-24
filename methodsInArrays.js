// How to work with Methods in Array

let fruits=["Banana","Orange","Kiwi","Apple"];
console.log(fruits.toString()); //it will gives array in coma sepertaed form

console.log(fruits.join("*"));

//pop() method removes the last element in the array & it also returns the poped value

console.log(fruits.pop());
console.log(fruits);

//push() method is used to add new element in the existing array & it also returns length of an array 

let mobile=["Samsung","iphone","Nokia"];

console.log(mobile.push("Redme"));

console.log(mobile);

//shift() method removes the first array element & shift all other elements to the lower index

let colour=["Red","Green","Orange","Black"];

console.log(colour.shift());  //it removes first elemet i.e. Red
console.log(colour);

//unshift() method will add new elementin the array at the begining & 
// shift all other elements to the higher index and also returns the length of an arrray

colour=["Red","Green","Orange","Black"];
console.log(colour.unshift("Blue"));
console.log(colour);

//Deleting element from array 
colour=["Red","Green","Orange","Black"];
delete colour[1];
console.log(colour);

//concat()- it joins/merges 2 or more arrays
 let arr1=["A","B"];
 let arr2=[1,2,3];
 console.log(arr1.concat(arr2)); //concat 2 arrays
 let arr3=["X","Y"];
 console.log(arr1.concat(arr2,arr3));  //concat more than 2 arrays
 
 //slice()- slices out piece of an array into new array
 let cars=["Hyundai","Xcent","Suzuki"];
 console.log(cars.slice(1));  //[ 'Xcent', 'Suzuki' ] create new array
 console.log(cars);           //souce array is as it is

 //sort()- sort an array by asending order or alphabate order
 colour=["Red","Green","Orange","Black"];
 let number=[200,100,50];
console.log(colour.sort());
console.log(number.sort());

//reverse()- to reverse the original array

colour=["Red","Green","Orange","Black"];
console.log("Original array element:"+colour);
colour.reverse();
console.log("After reverse array element:"+colour);

