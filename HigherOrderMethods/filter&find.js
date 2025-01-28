//filter() - return multiple values [in employee database who has more than 50000 salary it return the values]
// if satisfy the condition return all the values 
let Employee = [
    {empName: "Rathinavel" , salary:20000},
    {empName: "Madhaiyan" , salary:60000},
    {empName: "Munusamy" , salary:100000},

]
let filterData = Employee.filter(val=>val.salary>50000).sort().fill({id:1,name:"abc"})
console.log(filterData);

// find() - it satisfy condition it will be preference for first value

let filterDataByFind = Employee.find((val)=>{
    return val.salary>20000
})
console.log(filterDataByFind); // first preference condition : { empName: 'Madhaiyan', salary: 60000 }
