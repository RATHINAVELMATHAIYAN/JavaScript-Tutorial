let newPromise = new Promise((resolve,reject)=>{
let dataReceived = true;
if(dataReceived){
    resolve("Data fetch Succesfully..")
}
else{
    reject("Data not found..")
}
})

let message = await newPromise
console.log(message);
