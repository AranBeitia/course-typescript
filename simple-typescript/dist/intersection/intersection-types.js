"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.X = void 0;
function X(obj) {
    return obj.a + obj.b + obj.c;
}
exports.X = X;
function combine(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const objA = { a: 1 };
const objB = { b: 2 };
const resultObj = combine(objA, objB);
