"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: 'hitesh', age: 10 };
console.log("Hitesh");
console.log(user.name);
// typescript
var greetings = "Hello world!";
console.log(greetings);
//number
var userId = 110800;
var roll = 1.823;
var roll_fixed = roll.toFixed(1); // roll_fixed = 1.8
console.log(roll_fixed);
//any : it does not check the type
var hero = { name: "thor", kills: 1500, fun: function () {
    } };
hero.fun();
//hero();  // though it does not check type, so it can be a function even
//Function : In function, It is compulsory to use type annotation in parameters
function signUp(name, email, isPaid) { }
signUp("swayam", "swayam@gmail.com", true);
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
