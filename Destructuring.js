
// Destructing - In Arrays and Objects we can sepearte ecah values and store in one ovariable is called as Destructing
let arr=[10,20,30,40];
let[a,,,d] = arr;
console.log(a,d);

// Destructuring Nested Array
let newArr1 = [10,[30,40]];
let[x,[a11,b12]] = newArr1;
console.log(a11);

