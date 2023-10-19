enum SeatChoice {
    AISLE,  // 0
    MIDDLE, // 1
    WINDOW, // 2
    FOURTH  // 3
}
let seat = SeatChoice.MIDDLE;
console.log(seat); // 1

// --------------------------------------------------------- default value -----------------------------
enum Power {
    LEVEL1 = 10,
    LEVEL2, // 11
    LEVEL3  // 12
}
console.log(Power.LEVEL3); // 12

// --------------------------------------------- Defined value ----------------------------------------
enum Heros {
    TONY = "iron man",
    THOR = "thunder god",
    STEVE = "captain america"
}

let h : Heros = Heros.THOR;

console.log(Heros.TONY);

export{};