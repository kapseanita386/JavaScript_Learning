class School
{
    details(name,address,phoneno)
    {
         this.sname=name;    //this.sname belongs to the class & name belongs to the method
         this.sadd=address;
         this.sphone=phoneno;
         console.log(name,address,phoneno);

    }
   
}
let sch=new School();  // define object for accessing class
sch.details("Ovi",23,1231231312);  //calling the method 

