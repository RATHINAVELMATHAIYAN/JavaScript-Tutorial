// resolve = "Success" , reject = "error" , pending

// then() , catch() & finally()
let newPromise = new Promise((resolve, reject) => {
    let dataReceived = true;
    if (dataReceived) {
        resolve("Data Received")
    }
    else {
        reject("Data not received")
    }
})
// newPromise.then(console.log).catch(console.log)
newPromise.then((message) => {
    console.log("Success: " + message);  
    return ("Next Success: "+ message)

}).then((nextMessage)=>{
console.log(nextMessage);

})
    .catch((error) => {
        console.log("Failure: " + error);
        return("Next Failure: "+error)

    }).catch((nextError)=>{
        console.log(nextError);
        
    })
    .finally(() => {
        console.log("End!...");

    })

// ------------------------------------------------------------------------------------

function fetchProfile(successCallBack, errorCallBack) {
    let dataReceived = true;
    if (dataReceived) {
        successCallBack("Data Recevied")
    }
    else {
        errorCallBack("Data Not Received")
    }
}
fetchProfile(
    (message) => {
        console.log(message);
        fetchProfile((nextMessage) => {
            console.log("nextMessage: "+ nextMessage);

        },
            (nextError) => {
                console.log("nextError: " + nextError);

            })
    },
    (error) => {
        console.log(error);
    })