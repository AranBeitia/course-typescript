"use strict";
// function optional and default parameters
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumEverything = exports.sum2 = exports.sum = void 0;
// export function sum(a: number, b?: number): number {
// 	return a + (b || 0)
// }
function sum(a, b = 0) {
    return a + b;
}
exports.sum = sum;
const sum2 = (a, b) => a + b;
exports.sum2 = sum2;
// unknown number of arguments
function sumEverything(arg1, arg2, ...numbers) {
    return numbers.reduce((result, num) => result + num, 0);
}
exports.sumEverything = sumEverything;
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
