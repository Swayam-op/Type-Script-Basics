let user  = {name: 'hitesh', age: 10}

console.log("Hitesh");
console.log(user.name)

// typescript

let greetings : string = "Hello world!";
console.log(greetings);


//number

let userId : number = 110800;
let roll = 1.823;
let roll_fixed : string = roll.toFixed(1); // roll_fixed = 1.8
console.log(roll_fixed);


//any : it does not check the type

let hero : any = { name : "thor", kills : 1500, fun(){

}}

hero.fun();
//hero();  // though it does not check type, so it can be a function even


//Function : In function, It is compulsory to use type annotation in parameters

function signUp(name : string, email : string, isPaid : boolean){}
signUp("swayam", "swayam@gmail.com", true);

var login = (name: string, email: string, isPaid: boolean = false) => {}


export {}