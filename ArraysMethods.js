// Arrays Methods

// 1. Concat() - it can be Merge Two Arrays or more arrays
let arr1 = [10,20,30,40];
let arr2= [50,60,70,80]
console.log(arr1.concat(arr2)); //  10, 20, 30, 40,50, 60, 70, 80
console.log(arr1.concat()); // [ 10, 20, 30, 40 ]
console.log([].concat(arr2)); // [ 50, 60, 70, 80 ]
console.log(arr1.concat(12,13,14)); // [ 10, 20, 30, 40,12, 13, 14]


// 2. Slice - remove or extract a piece of an array 

let newArr =[1,2,3,4,5,6,7]
let sliceVal = newArr.slice(1,-3);
console.log(sliceVal); // [ 2, 3, 4 ]

// 3. Flat() - returns a new Array

let flatArr = [1,2,3,[4,[5,6],[12,23,23,[67,39]]]];
console.log(flatArr.flat(Infinity));

// 4. Fill() - replce the array with given index
let fillarr = [10,20,30,40];
console.log(fillarr.fill(101,1,3)); // [ 10, 101, 101, 40 ]

// 5. 
