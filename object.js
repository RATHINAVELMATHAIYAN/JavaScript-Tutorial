let userProfile ={
    name: 'Rathinavel',
    age: 21,
    color: "Black",
    hair: "Black",
    eat : function(){
        console.log(" I am Gonna Eating IceCream")
        return "Vanilla IceCream"
    }

}
console.log(userProfile.name, userProfile.eat()) // Rathinavel Vanilla IceCream
let newIceCream = userProfile.eat(); //  I am Gonna Eating IceCream
console.log(newIceCream); // Vanilla IceCream

// object i String
let Vehicle = {
    "vehicleType" : "Four-Wheeler",
    fuelType : "Petrol",
    price: 20000,
    "seaterType": ["one","two","Three"] 
}
console.log(Vehicle.seaterType); //[ 'one', 'two', 'Three' ]



// ShortEnd Property - Once Assign a value We Can acess Directly

let uName = "Rathinavel"
let Age = 21
let person ={
    uName,
    Age
}
console.log(person.uName); //Rathinavel

// Dynamic Property - we declare the value before after accesing inside the object using array literals

let dynamicProperty = "employeeID"
let person1 = {
    uName,
    Age,
    [dynamicProperty] : "IFS123"
}
 console.log(person1.uName,person1[dynamicProperty])  // Rathinavel IFS123
