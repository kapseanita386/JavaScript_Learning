class Student
{
    constructor()
    {
        let name,marks;  //define data
    }

       getName()
        {
            return this.name;

        }
        setName(name)
        {
            this.name=name;

        }
        getMarks()
        {
            return this.marks;
        }
        setMarks(marks)
        {
            this.marks=marks;
        }
 }
 let stu = new Student();
stu.setName("Anu");
stu.setMarks(95);
console.log(stu.getName());
console.log(stu.getMarks());
//console.log(stu.setMarks(),stu.setName());