//Function must have type annotation
function signup(name : string, gmail: string, isPaid: boolean = false){}
signup("Swayam", "swayam@gmail.com");

function isLogin(name: string, gmail: string, isPaid: boolean) : boolean  {
    return true;
}
let isLoggedin : boolean = isLogin("swayam", "swayam@gmail.com", true); 

const consoleError = (errmsg : string) : void =>{
    console.log(`Error is ${errmsg}`);
}

//It's a better practice to use never instead of void in case of handleError
const handleError = (errmsg : string) : never =>{
    throw new Error(errmsg);
}





export{}

