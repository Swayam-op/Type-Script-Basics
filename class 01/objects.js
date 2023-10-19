"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Swayam", isPaid: true });
//createUser({}) will throw error
// createUser({name : "bimal", isPaid : true, email: "bimal@gmail.com"}); Will throw error
var new_user = { name: "bimal", isPaid: true, email: "bimal@gmail.com" };
createUser(new_user); // works
function createCourse() {
    return { name: "Typescript", price: 1000 };
}
function createCourse_2() {
    return { name: "Typescript", price: 1000 };
}
