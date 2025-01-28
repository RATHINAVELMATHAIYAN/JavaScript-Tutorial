// 1. Math.abs()
console.log(Math.abs(-100));  // 100

//2.  Math.sign() - positive = 1 & negative = -1
console.log(Math.sign(-12)); // -1
console.log(Math.sign(0)); // 0 
console.log(Math.sign(12)); // 1

// 3. Math.sqrt()
console.log(Math.sqrt(5)); // 2.23606797749979
console.log(Math.sqrt(-25)); // Nan
console.log(Math.sqrt(81)); // 9

// 4 . Math.cubrt
console.log(Math.cbrt(8)); // 2

// 5. Math.pow(base, exponent )
console.log(Math.pow(2,8)); // 256

// 6. Math.min(..values) & Math.max
let arr = [23,34,12,56,78]
console.log(Math.min(...arr)); // 12
console.log(Math.max(...arr)); // 78

// 7. Math.random()
console.log(Math.random());

// 8. tofixed()
let randomNumber = Math.random()*100000
console.log(randomNumber.toFixed(4) );

// 9. Math.ceil()
console.log(Math.ceil(0.1)); // 1

// 10 .Math.floor()
console.log(Math.floor(23.99)); // 23

// 11. math.round() 
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.04)); // 3

// 12 . Math.trunc(x)
console.log(Math.trunc(.123)); // 0












