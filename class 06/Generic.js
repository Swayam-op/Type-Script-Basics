"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTicket(id, seat) {
    //  let x : Type = id + 1;       // it will throw error, cause we don't know 1 is a Type value of not
    return id;
}
console.log(getTicket(1, 10));
// getTicket(1, "10"); it will throw error cause 1 is a number, Type has been number so can assign "10" in seat 
// -----------------------------------Another way of calling it ----------------------------
var val = getTicket(1, 10);
// this is right way calling generic functions
// --------------------------------------------Arrow functions ------------------------------------
var getMovieTicker = function (moviesSeats, seatId) {
    console.log(seatId);
    return moviesSeats[0];
};
console.log(getMovieTicker([1, 2, 3, 4, " "], 2));
