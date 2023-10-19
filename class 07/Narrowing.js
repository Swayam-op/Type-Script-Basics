"use strict";
// -----------------------------------Narrowing or extra catious--------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function printAll(products) {
    if (products) { // here it is checking products is null or not
        if (typeof products === "string") {
            console.log(products);
        }
        else if (typeof products === "object") {
            for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                var pr = products_1[_i];
                console.log(pr);
            }
        }
    }
}
printAll(null);
printAll("milk");
printAll(["apple", "ball", "cellogues"]);
function isAdminAcount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
var account = {
    name: "swayam",
    email: "swayam@gmail.com"
};
console.log(isAdminAcount(account));
// --------------------------------------------------instanceof -------------------------------------
function getDateOrDat(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
getDateOrDat(new Date("12/13/2021"));
getDateOrDat("Tuesday");
