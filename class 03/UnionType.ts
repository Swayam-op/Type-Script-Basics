let data : number | string = "";

//you can put number 
data = 1
//you can also put string
data = "hello"




//-------------------------- union type in function -----------------------------------------------

function getDBId(id: number | string): number | string{
    // id.toLowerCase()  it will throw error, cause id is not a string always. it's a combination of (number or string)
    if(typeof id === "number"){
        return id+1;
    }
    return id.toUpperCase();
}

getDBId(2);


//---------------------------------------more example -------------------------------------------

type Gender = 'male' | 'female'

type Student = {
    name : string,
    classTeacher : string,
    gender : Gender
}

type Teacher = {
    teacher_name : string,
    subject : string,
    gender : Gender
}

//in this case, rahul may become a teacher later.
let rahul : Student | Teacher = { 
    name : "Rahul sharma",
    classTeacher : "suchitra",
    gender : 'male'
}

// rahul.subject = "math"; it will throw error cause, subject is not present as property in rahul
rahul = {
    name : "Rahul sharma",
    subject : "math",
    gender : 'male',
    classTeacher : "suchitra"
} //Here rahul can store value of Student and Teacher both

console.log(rahul);

//-------------------------------------union and array -----------------------------------------------

let data_1 : readonly number[] | string[] = [1,2,3]; //all the item has to be eather number or string
let data_2 : readonly number[] | readonly string[] = ["one", "two", "three"]; //all the items are string
// data_2[2] = "four"    it will throw error because of readonly
let data_3 : ( number | string)[] = [1, 2, 3, "four", "five"];

export {};