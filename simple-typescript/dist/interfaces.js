"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.child = exports.suma = exports.valA = void 0;
let valueA = { someProp: 1 }; // tienen que asignarse todas las props
let profile = {
    name: 'Jon',
};
exports.valA = { someProp: 'mensaje' };
exports.valA.x = 1;
exports.valA.y = 2;
const suma = (a, b) => a + b;
exports.suma = suma;
exports.suma.prop1 = 'some prop';
exports.child = { x: 'some prop', y: 'some y prop', z: 'some z prop' };
