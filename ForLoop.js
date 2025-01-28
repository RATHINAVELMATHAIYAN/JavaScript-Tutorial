let person = {
    uName : "Rathinavel",
    Age: 21,
    hobbies : ["Cricket","Coding","Riding"],
    familyDetails: {
        totalMembers : 5,
            sibilings : ["a","b","c","d"]
    },
 walk(){
console.log("I am Going to Institue");

 }
}
for(let key in person){
    console.log(person[key])
}

// for loop in Array
let arr =[10,100,1000,1000];
for(let key in arr){
    console.log(arr[key]);
    
}

// String 
let Str = "EMCAJavascript";
for(let key in Str){
    console.log(Str[key]+1);
    
}