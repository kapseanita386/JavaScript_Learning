class Student
{
    setDetails()
    {
    this.sName="Anita";
    this.sRollNo=16;
    this.sGrade="A";
    }
    display()
    {
        console.log(this.sName,this.sRollNo,this.sGrade);
    }
}
let stu = new Student;
stu.setDetails();
stu.display();
