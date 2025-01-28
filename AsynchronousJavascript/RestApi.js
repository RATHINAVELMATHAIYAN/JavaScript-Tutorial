fetch("https://fakestoreapi.com/users/abcd")
    .then((Response) => {
        if (!Response.ok) {
            throw new Error("Data Not Found");

        }
        else {
            // console.log(Response.ok);
            return Response.json()
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error.message);

    })