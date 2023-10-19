// -----------------------------------Narrowing or extra catious--------------------------------------

function printAll(products: string | string[] | null ){
    if(products){ // here it is checking products is null or not
        if(typeof products === "string"){
            console.log(products);
        }
        else if (typeof products === "object"){
            for(let pr of products){
                console.log(pr);
            }
        }
    }
}


printAll(null);
printAll("milk");
printAll(["apple", "ball", "cellogues"]);


// --------------------------------------- "in" operator in narrowing---------------------------------

interface User {
    name: string,
    email: string
}

interface Admin{
    name: string
    email: string
    isAdmin : boolean
}

function isAdminAcount(account: User | Admin): boolean{
    if("isAdmin" in account){
        return account.isAdmin;
    }
    return false;
}

let account: User ={
    name: "swayam",
    email: "swayam@gmail.com"
}
console.log(isAdminAcount(account));


// --------------------------------------------------instanceof -------------------------------------

function getDateOrDat( x : Date | string){
    if(x instanceof Date){
        console.log(x.toLocaleString());
    }
    else{
        console.log(x.toUpperCase());
    }
}

getDateOrDat(new Date("12/13/2021"));
getDateOrDat("Tuesday")



// ------------------------------------------type predicated ---------------------------------------

type fish = {
    name : "fish1",
    animal: boolean,
    swim : boolean
}

type dog = {
    name : "dog1",
    animal: boolean,
    bark : boolean
}

function isFish(animal: dog | fish): animal is fish{ // it will return animal is fish or not
    return (animal as fish) !== undefined;
}

function letChill(animal: dog | fish){
    if(isFish(animal)){
        console.log(animal.swim);
    }
    else{
        console.log(animal.bark);
    }
}

export {}