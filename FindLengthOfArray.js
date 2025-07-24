let fruits =["mango","orange","banana","apple"];

console.log(fruits.length);
//looping elements of an array
//how to read individual data in the array
// for(let i=0;i<=3;i++)
// {
//    console.log(fruits[i]);
// }

//Looping elements of Array using for/Of loop

for(ele of fruits)    //ele is variable name
{
    console.log(ele);
}
let a=2;
//Recognize an Array typeof(keyword)
console.log(typeof fruits);
console.log(Array.isArray(fruits));  // to find defined variable is array variable or not
console.log(Array.isArray(a));