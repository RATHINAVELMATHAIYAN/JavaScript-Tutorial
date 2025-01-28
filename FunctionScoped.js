var a = 10;
let b = 20;
const c = 30;
function outerScoped() {

    function innerScoped() {
        var a = 101;
        let b = 202;
        const c = 203;
        console.log(a + b + c);

    }
    innerScoped();

}
outerScoped();
console.log(a + b + c);

// Named Function - normally declared a function name
function namedFunc(uName) {
    console.log("Function Name : " + uName);

}
namedFunc("Named Function");

// ananoums Function - defined a variable for creating ananoums function

let ananoumsName = function uName(funcName) {
    console.log("Function Name: " + funcName)
}
ananoumsName("Ananmous Function")

// Arrow Function

let arrowFunc = (uName) => {
    console.log("Function Name : " + uName);

}
arrowFunc("Arrow Function")

// Arrow Function using  Calculator

let calcFunc = (a, b) => {
    console.log("Addition of two number is:" + (a + b));
    console.log("Subtraction of two numbers is :"+(a-b));
    console.log("Multiplication of two numbers is :"+(a*b));
    console.log("Division of two numbers is :"+(a/b));
    

}
calcFunc(10, 20)