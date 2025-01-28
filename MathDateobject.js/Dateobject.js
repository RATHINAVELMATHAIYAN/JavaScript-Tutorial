// 1. date.getfullyear()
let date = new Date()
console.log(date); // 2025-01-21T14:23:43.280Z
console.log(date.getFullYear()); // 2025

// 2. date.getMonth()
console.log(date.getMonth()+1); // 1

// 3. date.getdate()
console.log(date.getDate());

//4.  date.gethours()
console.log(date.getHours());

 // 5. getMinutes()
 console.log(date.getMinutes());
 console.log(date.getSeconds());

 // 6. date.setfullyear(year,month,day)
 //  date.setFullYear(2020,5,1)
 console.log(date);

 // tolocalateDateString
 console.log(date.toLocaleDateString()); // 1/21/2025
 console.log(date.toDateString()); // Tue Jan 21 2025
 console.log(date.toLocaleString()); // 1/21/2025, 8:05:10 PM
 console.log(date.toLocaleTimeString()); // 8:05:52 PM
 
 
 
 
 
 
 
 

