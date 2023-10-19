class User{
    email: string
    name: string
    readonly userId: number = 1
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

let user_1 = new User("user1@gmail.com", "user 1");

// ---------------------------------------------public & private --------------------------------------
class Student{
    public name: string
    private rollno: number

    constructor(name:string, rollno: number){
        this.name = name;
        this.rollno = rollno;
    }
}

let student_1 = new Student("ram", 1);
student_1.name = "ram sahoo";
// student_1.rollno -> can not access rollno because of private


// --------------------------------------------Other way of declaring datamembers --------------------
class Teacher{
    public subject: string
    constructor(
        public name:string,
         private age: number
         ){

    }
}

let teacher_1 = new Teacher("suchitra", 35);
console.log(teacher_1);



// -------------------------------------------getter & setter -----------------------------------------
class Course{
    private _coursecount:number = 0;
    
    constructor(course_name: string,
        course_price: number,
        course_active: boolean){
        }
    
    get CourseCount(): number{
        return this._coursecount;
    }
    
    set CourseCount(value: number){
        this._coursecount = value;
    }

}

let course_1 = new Course("typescript", 1000, true);
course_1.CourseCount = 1;
console.log(course_1.CourseCount);

// -------------------------------------------------------Protected access modifier ---------------------

class Hero{
    protected immortal: boolean
    readonly friend: string
    constructor(public name: string, public kills: number,public alive: boolean){}
}

class SuperHuman extends Hero{
    set immortality(value: boolean){
        this.immortal = value;
    }
    get immortality(): boolean {
        return this.immortal;
    }
}


let shaktiman = new SuperHuman("SHAKTI MAN", 10, true);
shaktiman.immortality = false;
console.log(shaktiman, shaktiman.friend);
console.log(`${shaktiman.name} is ${shaktiman.immortality?'' : 'not'} immortal`);
export{}