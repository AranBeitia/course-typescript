"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import multiply, { multiplyByTwo } from './multiply'
const multiplyModule = __importStar(require("./multiply"));
const types = __importStar(require("./types"));
const interfaces = __importStar(require("./interfaces"));
const functions = __importStar(require("./functions"));
const a = 4;
const b = 4;
console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`);
// types
console.log(types.upperFirstLetter('hello'));
types.upperFirstLetter(null);
types.log('hello kitty');
console.log(types.Color.Red, types.Color.Green, types.Color.Blue);
console.log(types.Color[5]);
// interfaces
console.log(interfaces.valA);
console.log(interfaces.suma(8, 9));
console.log(interfaces.child);
// functions
console.log(functions.sum(9));
console.log(functions.sum2(9, 1));
console.log(functions.sumEverything('4', false, 9, 1, 8, 10));
