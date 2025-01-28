let person = {
    pName:"Xyz",
    age: 30
}
console.log(person);


// 1. object.create
let newObj = Object.create(person) 
newObj.location = "Tamil Nadu"
console.log(newObj.__proto__); // { pName: 'Xyz', age: 30 }
console.log(newObj.age); // 30
console.log(newObj); // { location: 'Tamil Nadu' }
console.log(Object.getPrototypeOf(newObj));

// 2. Object.assign() - Merge the two object
let person1 = {
    id:"Qwerf",
    name1:"Rathinavel"
}
Object.assign(person1,{role:"Front-end-developer", salary:12000})
 let newObject1=Object.assign(person1,{role:"Front-end-developer", salary:12000})
console.log(person1);
console.log(newObject1);

// 3. object.enteries()
let employee = {
    eName: "Madhaiyan",
    eRole:"Back-End-Developer"
}
let multiArr = Object.entries(employee)
multiArr.push(["Name"])
console.log(multiArr); // [ [ 'eName', 'Madhaiyan' ], [ 'eRole', 'Back-End-Developer' ] ]

// 4. object.fromEnteries
let normalObj =  Object.fromEntries (multiArr)
console.log(normalObj);


