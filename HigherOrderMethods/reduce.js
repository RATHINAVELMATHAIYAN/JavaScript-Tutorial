// normal problem
let  arr = [10,20,30,40,50]
let totalVal = 0;
for(let i=0;i< arr.length;i++){
    totalVal = totalVal+arr[i]
}
console.log(totalVal); // 150

// reduce() - 

let totalVal1 = arr.reduce((acc,cElement,index,array)=>{return acc+cElement},0) // acc- accumulator
console.log(totalVal1); // 150

// example 2 -calculate total salary for Employee
let employees =[
    {empName:"Rathinavel",salary:23000},
    {empName:"abc",salary:24000},
    {empName:"xyz",salary:20000},
    {empName:"Alex",salary:21000},
]
let totalSalary = employees.reduce((acc,cElement,index,array)=>{return acc+cElement.salary},0)
console.log(totalSalary); // 88000
