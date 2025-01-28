// prototypal inheritance

let employee ={
    eName:"Rathinavel",
    salary:23000,
    introyourself: function(a,b){
        console.log(a+b)
        console.log(this.eName);
        
    }
}
console.log(employee.eName);
employee.introyourself(10,20)

eName="Madhaiyan"
let employee1 ={
    eName:"Rathinavel",
    salary:23000,
    introyourself: (a,b)=>{
        console.log(a+b)
        console.log(this.eName);
        
    }
}
employee1.introyourself(10,30)

// call apply blind
let person ={
    eName:"xyz",
    eSalary:23000
}

let person1 ={
    Pid:"IRTE131",
    introyourself: function(a,b){
        console.log(this.eName+" "+this.eSalary+(a+b))
        return (a+b)
    }
}
person1.introyourself.call(person1,10,20) // call 
person1.introyourself.apply(person, [100,200]) // apply

let newFun = person1.introyourself.bind(person, 1000,2000)
console.log(newFun());
