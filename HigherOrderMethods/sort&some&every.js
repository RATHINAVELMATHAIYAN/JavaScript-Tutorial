
// [Ascending Order]
// note : a-b=> positive - swapping  
//  a-b => negative - no swapping 

//[Descending order]
//  b-a => positive - swapping

//1. sort() - sort the ascending order
let arr = [400,20,10,200,100]
arr.sort()
console.log(arr); // [ 10, 100, 20, 200, 400 ]

let newArr = arr.sort((val1,val2)=>{
    return val1 - val2
    // a-b => 400-20 = 380 [20,400,10,200,100]
    // a-b => 400 - 10 = 390 [20,10,400,200,100]
})
console.log(newArr);


// Descending Order 
let arr1 = [23,24,2324,4234,131]
let descendingArray = arr1.sort((a,b)=>{
    return b-a
})
console.log(descendingArray);

// 2. some() - the given array any one condition is true means it return true 
let arr2 = [1,2,3,4,5]
let value = arr2.some((ele,inde,arr)=>{
return ele%2==0
})
console.log(value);

// every() - acts as logical and (&&) operator 
let value1 = arr2.every((ele,inde,arr)=>{
    return ele%2==0
})
console.log(value1);
