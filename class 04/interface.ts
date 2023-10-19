interface User{
    readonly dbId : number,
    email : string,
    googleId? : string,

//    getAddress : () => string //this is a way of declaring method
    getAddress() : string,
    getCoupon(couponname : string, value: number): string;
}

let swayam: User = {
    dbId : 110800,
    email: "swayam@gmail.com",
    getAddress : () => "cuttack, kotar",
    getCoupon : (name: "movie", value : 2) => {return "ok"},

    // getCoupon : () => {}            you can write this too
    // getCoupon : ("movie", 2) => {}  you can write this too
}

// ------------------------------------------Re-opening interface -------------------------------------------

interface Animal{
    name: string
}

//You can also add more property in Animal interface declaring it again
interface Animal{
    eat : 'veg' | 'non-veg' | 'liquid'
}

let tiger : Animal = {
    name: "tiger",
    eat: "non-veg"
}


// -------------------------------------------------Extends-----------------------------------------

interface Pet extends Animal {
    live: 'home' | 'jungle' | 'water'
}

let dog : Pet = {
    name: "rocky",
    eat: "veg",
    live: 'home'
}



// --------------------------------------- interface vs type alias -----------------------------------

//          interface                                    //type

//        * interface uses extends keyword to          | * Type uses union or(|) to have properties of other 
//          have property of two or more interfaces.   |   types
//                                                     |
//        * interface can be redclared to add more     | * Type can not be redeclared.
//          property.                                  |
//          eg:                                        |
//          interface Hero{                            |
//             name : string
//          }
//          interface Hero{
//             age : number
//          }
export {};