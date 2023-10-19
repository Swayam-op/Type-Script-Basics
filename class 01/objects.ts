function createUser({name: string, isPaid: boolean}){

}

createUser({name: "Swayam", isPaid: true});
//createUser({}) will throw error--

// createUser({name : "bimal", isPaid : true, email: "bimal@gmail.com"}); Will throw error

let new_user = { name : "bimal", isPaid : true, email: "bimal@gmail.com"};
createUser(new_user); // works




function createCourse():{}{
    return {name : "Typescript", price : 1000};
}

function createCourse_2():{name: string, price: 1000}{
    return {name : "Typescript", price : 1000};
}




export{}