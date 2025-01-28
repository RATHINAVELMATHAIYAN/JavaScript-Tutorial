// 1. charAt() - to find the character
let str = "Hello World"
console.log(str.charAt(1)); // e
console.log(str.charAt(str.length-1));  // d

// 2. chartcodeAt
let str1 = "JavaScript"
console.log(str1.charCodeAt(4)); // 83
console.log(str1.charCodeAt(-1)); // NAN
console.log(str1.charCodeAt(23)); // NAN

// 3. concat()
let newStr = str.concat(" ",str1)
console.log(newStr); // Hello World JavaScript

// 4. includes()
let str2 = "Single Threaded"
console.log(str2.includes("s")); // false
console.log(str2.includes("n",2)); // true
console.log(str2.includes("j",7)); // false

// 5.indexOf ()
let newStr1 = "Rathinavel"
console.log(newStr1.indexOf("a")); // 1
console.log(newStr1.indexOf("s",2)); // -1

// 6. lastIndexOf()
console.log(newStr1.lastIndexOf("a")); // 6

// 7.repeat()
let newString = "Hello Javascript"
console.log(newString.repeat(3)); // Hello JavascriptHello JavascriptHello Javascript

// 8. replace() / replaceall()
let string = "js is a script language -js"
console.log(string.replace("js","Java Script")); // Java Script is a script language
console.log(string.replaceAll("js","Java Script")); // Java Script is a script language -Java Script

// 9 . slice ()  - slice and copy of String
let sliceStr = "Single Thread"
console.log(sliceStr.slice(2)); // ngle Thread
console.log(sliceStr.slice(0,7)); // Single 
console.log(sliceStr.slice(-3));

console.log(sliceStr.slice(-3,-1)); // ea

// 10. substr()
let substrArr = "Single Thread"
console.log(substrArr.substring(3)); // gle Thread
console.log(substrArr.substring(-1)); // Single Thread
console.log(substrArr.substring(8,0)); // Single T

// 11. split()
let words = "My name is Iron-man"
console.log(words.split("")); // 'M', 'y', ' ', 'n', 'a',
console.log(words.split(" ",2));// [ 'My', 'name' ]
console.log(words.split(" ")); // [ 'My', 'name', 'is', 'Iron-man' ]
console.log(words.split("-")); // [ 'My name is Iron', 'man' ]

// 12 . startWith
console.log(words.startsWith("M")); // true
console.log(words.startsWith("n",4)); // false
console.log(words.startsWith("name",3)); // true


// 13.endWith()

// 14. tolowercase()
console.log(words.toUpperCase()); // MY NAME IS IRON-MAN

// 15. toUpperCase()
console.log(words.toLowerCase()); // my name is iron-man

// 16. trim ()





















