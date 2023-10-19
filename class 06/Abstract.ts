abstract class TakePhoto{
    constructor(public cameraMode: string, public frames: number){}

    abstract getPhoto(): void

    getReelTime(): string{
        return new Date().toTimeString();
    }
}


class Instagram extends TakePhoto{
    constructor(cm: string, fm : number){
        super(cm, fm);
    }

    getPhoto(): void {
        console.log("Here is your picture");
    }
}

let inst = new Instagram("front", 32);
inst.getReelTime();
console.log(inst);


// -------------------------------------------Notes -----------------------------------------
// * Abstract class can declare abstract functions and normal functions.
// * Abstract class can create a object.
// * Normal function in abstract class can be overrided in inherited class.



export{};