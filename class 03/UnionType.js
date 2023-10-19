"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = "";
//you can put number 
data = 1;
//you can also put string
data = "hello";
//-------------------------- union type in function -----------------------------------------------
function getDBId(id) {
    // id.toLowerCase()  it will throw error, cause id is not a string always. it's a combination of (number or string)
    if (typeof id === "number") {
        return id + 1;
    }
    return id.toUpperCase();
}
getDBId(2);
//in this case, rahul may become a teacher later.
var rahul = {
    name: "Rahul sharma",
    classTeacher: "suchitra",
    gender: 'male'
};
// rahul.subject = "math"; it will throw error cause, subject is not present as property in rahul
rahul = {
    name: "Rahul sharma",
    subject: "math",
    gender: 'male',
    classTeacher: "suchitra"
};
console.log(rahul);
