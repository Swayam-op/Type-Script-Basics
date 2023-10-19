class User{
    email: string
    name: string
    readonly city: string = "cuttack";
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

let ram = new User("Ram", "ram@gmail.com");



// ----------------------------------------- public & private --------------------------------

