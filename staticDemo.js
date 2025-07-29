class Test
{
    static a=100;      //static variable
    b=200;             //non- static variable

    static m1()        //static method
    {
        console.log("This is the static method");
    }
    m2()            //non-static method
    {
        console.log("This is non static method");
    }
}
//we can directly access static varibles & methods using class name

console.log(Test.a);
Test.a=400;
console.log(Test.a);
//console.log(Test.b);     //not valid gives error
Test.m1();
let T1=new Test();      //created object to access nonstatic variable&method

console.log(T1.b);
T1.m2();
