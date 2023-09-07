"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Robotin_name, _AdvancedRobot_name;
class Robotin {
    constructor(name) {
        _Robotin_name.set(this, void 0);
        this.somePrivateField = 'It is private!!!';
        __classPrivateFieldSet(this, _Robotin_name, name, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _Robotin_name, "f");
    }
}
_Robotin_name = new WeakMap();
class AdvancedRobot extends Robotin {
    // private somePrivateField = 'OVERRIDE PRIVATE FIELD'
    constructor(name) {
        super(name);
        _AdvancedRobot_name.set(this, void 0);
        __classPrivateFieldSet(this, _AdvancedRobot_name, `Advanced ${name}`, "f");
    }
    getAdvancedRobotName() {
        return __classPrivateFieldGet(this, _AdvancedRobot_name, "f");
    }
}
_AdvancedRobot_name = new WeakMap();
const robotin = new AdvancedRobot('Jack');
console.log('parent name', robotin.getName());
console.log('subclass name', robotin.getAdvancedRobotName());
// console.log(robotin.somePrivateField)
