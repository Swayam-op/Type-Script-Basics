"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rgb = [255, 210, 220];
// there is an issue that some one do array operation here. and it may exced the lenght
rgb.push(222); //typescrpt allows it 
//rgb.push("red") it will throw error
console.log(rgb);
