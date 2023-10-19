const heroes: string[] = [];
const villains: Array<string> = [];

heroes.push("thor");
villains.push("thanos");

// --------------------------- types and array -------------------------------------

type Hero = {
    name : string,
    power : number,
    alive : boolean
}

const superHeros: Hero[] = [];
superHeros.push({name : "swayam", power : 97, alive: true});


// ------------------------------ Matrix --------------------------------------------

const matrix : number[][] = []
matrix.push([1,2,3]);
matrix.push([4,5,6]);
matrix.push([7,8,9]);
console.log(matrix);

export{};