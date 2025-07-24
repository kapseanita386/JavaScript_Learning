let person=
{
    firstname :"Anu",
    lastname :"kapse",
    age:39,
    weight:60
}
//Accessing Object Properties: two ways to access
console.log(person["firstname"]);   // Or
console.log(person.age);      

//How to add new property to the existing object
person["Height"]=5.5;
//person.Height=5.5; 
console.log(person.Height);
//How to update property to the existing object
person["age"]=25;
console.log(person["age"]);

//Remove the proprty from the object
delete person["age"];
console.log(person.age);
console.log("*********Looping Object*********");
// How to read values from object using for inloop statements
 for(let x in person)   //x is a new variable used to store data in object 
 {
    // console.log(x);         //It will print only proprty name
    // console.log(person[x]); //It will print values of property
    console.log(x+"  "+person[x]);
 }