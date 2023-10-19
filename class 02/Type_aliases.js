"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    console.log("userName : ".concat(user.name, ", email : ").concat(user.email, ", isPaid : ").concat(user.isPaid));
    return { message: "Login success", body: user, success: true };
}
createUser({ name: "bimal", email: "bimal@gmail.com", isPaid: true });
var newStudent = {
    _id: "001",
    name: "thor",
    age: 13,
    class: 9,
    books: ["car"]
};
newStudent.name = "thor assgard";
newStudent.books.push("car2");
// newStudent._id = "002";      it will throw error, cause it is readonly
console.log(newStudent);
var newCard = {
    cardnumber: "1234567890",
    carddate: "10-11-2022",
    cardcvv: 628
};
