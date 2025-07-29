class Student
{
    constructor(name,rollno,division)
     {
        this.studentName=name;
        this.studentRollNo=rollno;
        this.studentDivision=division;
        console.log(this.studentName,this.studentRollNo,this.studentDivision);
     }
}
let stu=new Student("Anu",23,"C");
