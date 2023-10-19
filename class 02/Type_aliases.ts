type User = {
    name: string,
    email: string,
    isPaid: boolean
}

type Response = {
    message: string,
    body: User,
    success: boolean
}

function createUser(user : User): Response{
    console.log(`userName : ${user.name}, email : ${user.email}, isPaid : ${user.isPaid}`);
    return {message : "Login success", body: user, success: true};
}

createUser({name: "bimal", email: "bimal@gmail.com", isPaid: true});



//-------------------------------readonly------------------------------------------------------

type Student = {
    readonly _id : string,
    name: string,
    age: number,
    class: number,
    readonly books: Array<string>,
    creaditCard?: number // ? defines that it is not compulsory
}

let newStudent : Student = {
     _id : "001",
    name: "thor",
    age: 13,
    class: 9,
    books : ["car"]
}

newStudent.name = "thor assgard";
newStudent.books.push("car2");
// newStudent._id = "002";      it will throw error, cause it is readonly
console.log(newStudent);



//------------------------------------combination of multiple types-------------------------------------
type CardNumber = {
    cardnumber : string
}

type CardDate = {
    carddate : string
}

type CardCvv = {
    cardcvv : number
}

type CardDetails = CardNumber & CardDate & CardCvv; // & is used sum up all the type

let newCard : CardDetails = {
    cardnumber : "1234567890",
    carddate : "10-11-2022",
    cardcvv : 628
}

export {}