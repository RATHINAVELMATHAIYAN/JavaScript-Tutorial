// For Each ()

let fruits = ["Apple","Bannana","WaterMelon","Orange"]
fruits.forEach(printFruits)
function printFruits(currentElement,index,totalArray){
    console.log(currentElement); //  Apple Bannana WaterMelon Orange
    console.log(index); // 0 1 2 3
    console.log(totalArray); // [ 'Apple', 'Bannana', 'WaterMelon', 'Orange' ]
    
    
}

// Map() -- using Ananamous Function
fruits.map(function(currentElement,index,totalArray){
    console.log(currentElement);
    
})

// difference between foreach() & map() methods

let pLanguage = ["java","python","javaScript","React.js","Angular"]

// foreach Main difference

let newArray = pLanguage.forEach((cElement)=>{
    return cElement
})
console.log(newArray);  // undefined - does not return any value in function

// map() 
let newArray1= pLanguage.map((cElement,index)=>{
    // return cElement
    return {id: index+1, pLanguage:cElement}
})
console.log(newArray1); // [ 'java', 'python', 'javaScript', 'React.js' ]

// chaining method -  It is a mechanism for calling a method on another method of the same object.

// map() method
let newArr = pLanguage.map(cElement=>cElement.toUpperCase()).sort().fill("123")
console.log(newArr); // [ '123', '123', '123', '123', '123' ]

// foreach()
let newArr1 = pLanguage.forEach(cElement=>cElement.toUpperCase()).sort().fill("123")
console.log(newArr1); // TypeError
