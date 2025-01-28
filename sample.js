// var - function scope

function outerFunction(){
if(true){
var functionVar = "I am Function Scope"
}
console.log(functionVar);

}
outerFunction();

// block Scoped 

function blockScoped(){
if(true){
    let newBlockScoped = "I am Block scoped Variable";
    const newBlockScoped1 = "I am Const variable"
    console.log(newBlockScoped); // let - Within a block execute the code    
    console.log(newBlockScoped1);
    
}
// console.log(newBlockScoped); // outside the loop if you execute means it says reference error
// console.log(newBlockScoped1);

}
blockScoped()