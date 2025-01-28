// Arrays in Spread Operator

let Hobbies =["Cricket","Football","BasketBall"];
let Hobbies1 = ["Reading","Writing"];
let newArr = [...Hobbies, ...Hobbies1]
// Hobbies[1] ="Handball"
// console.log(newArr,Hobbies);
let newArr1 = [...newArr,"vedio creator","Designing"]
console.log(newArr1);

// objects in Spread operator


let empDetail ={
    empId : "Abcd123",
    empName: "Rathinavel",
    empRole : "Full Stack Developer"
}
let team1 = {...empDetail,empId:"IQW123",empSalary:20000,team2Design:"Raect Developer"}
console.log(team1);

// Rest Operator or Rest Parameter
function restFunc(a,b,...arr){
console.log(a,b,arr);

}
restFunc(1,2,3,4) // 1 2 [ 3, 4 ]


function newFunc(a,b,...arr){
console.log(a,b,arr)
}
newFunc(1,2,3,4,5)