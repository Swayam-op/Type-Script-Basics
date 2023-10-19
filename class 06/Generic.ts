function getTicket<Type>(id : Type, seat: Type): Type{
//  let x : Type = id + 1;       // it will throw error, cause we don't know 1 is a Type value of not
    return id;
}



console.log(getTicket(1, 10));
// getTicket(1, "10"); it will throw error cause 1 is a number, Type has been number so can assign "10" in seat 

// -----------------------------------Another way of calling it ----------------------------

let val: number = getTicket<number>(1, 10); 
// this is right way calling generic functions


// --------------------------------------------Arrow functions ------------------------------------

const getMovieTicker = <T>(moviesSeats: T[], seatId: number): T =>{
    return moviesSeats[seatId];
}

console.log(getMovieTicker<number>( [1,2,3,4,5] , 2 ));
// getMovieTicker<number>( [1,2,3,4," "] , 2 )     it will throw error, cause " " is not number type



// ----------------------------------------------------Multiple generic type -----------------------

const getCarDetails = <T, H>(name: T) : T => {
    return name;
} 

console.log(getCarDetails("Honda")); // it will not throw any error, even I'm not defining H type;


const getBikeDetails = <T,H>(name: T , count: H ): T | H => {
    return name;
}
console.log(getBikeDetails("Pulser", 10));



// -----------------------------------extends in generic --------------------------------------

function getSmoke<T, H extends number>(name: T, amount : H):H{
    return amount;
}

console.log(getSmoke("mint", 10));



// ---------------------------------Generic class ------------------------------------
class Shop<T>{
    public product: T[] = []

    addToCart(product: T): T{
        this.product.push(product);
        return product;
    }
}

let shop = new Shop<string>;
shop.addToCart("milk");
export {};