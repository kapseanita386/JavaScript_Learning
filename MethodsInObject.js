let employee=
{
    empName : "Jui",
    empID : 21,
    empJob : "Engineer",
    empBasicSalary :5000,
    bonus : function()
    {
        return((this.empBasicSalary*10)/100);
    }
};
console.log(employee.bonus());
