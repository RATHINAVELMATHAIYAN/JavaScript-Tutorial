
// Arrays - index position

let flavors = ['Vaniila', 'Chocalate','ButterStoch','Strawberry']
console.log(flavors.length-1);
console.log(flavors[flavors.length-1]); // Strawberry

// Array Constructor

let newArray = new Array();
newArray[0] ="First"
newArray[1] = "second"
newArray[2] = "Third"
console.log(newArray.length) // 3

// dense Array
let denseArray = [10,20,30,40,50]
console.log(denseArray); // [ 10, 20, 30, 40, 50 ]

// sparseArray
let sparseArray =[10,,20,30,,,40]
console.log(sparseArray); // [ 10, <1 empty item>, 20, 30, <2 empty items>, 40 ]
