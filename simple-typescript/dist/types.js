"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = exports.log = exports.upperFirstLetter = void 0;
// Boolean
let b = false;
// Number(decimal, binary, octal, hexadecimal)
let numb = 1 + 0b1 + 0o1 + 0x1;
// String
const greeting = 'Hello';
const info = 'World';
const message = `${greeting} ${info}`;
// Null and undefined
let n = null;
let u = undefined;
// let someNumber: number = null (strict = true)
function upperFirstLetter(value) {
    if (!value)
        return;
    return value[0].toUpperCase() + value.substring(1);
}
exports.upperFirstLetter = upperFirstLetter;
const myObject = {};
const myObject2 = [];
const myObject3 = new Map();
// Void (para funciones que no retornan nada)
function log(message) {
    console.log(message);
}
exports.log = log;
// Array
let array1 = ['x', 'y'];
let array2 = array1;
// Tuple
let tuple = ['hello', 1];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (exports.Color = Color = {}));
let myFavouriteColor = Color.Blue;
// Any
let anyValue;
anyValue = 'a string';
anyValue = 12;
anyValue = true;
// Type assertions
// const email = document.getElementById('email')
// if (email) {
// 	email.addEventListener('change', (e) => {
// 		// const input = e.currentTarget as HTMLInputElement
// 		// console.log(input.value)
// 		const input = <HTMLInputElement>e.currentTarget
// 		console.log(input.value)
// 	})
// }
