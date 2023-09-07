"use strict";
class Robot {
    static isColorAvailable(color) {
        return Robot.availableColors.includes(color);
    }
    constructor(_name, color) {
        this._name = _name;
        this._color = color;
    }
    askName() {
        console.log(`My name is ${this._name}`);
    }
    move(distance) {
        console.log(`${this._name} moved ${distance} meters`);
        console.log(`acceso a prop ${this._name}`);
    }
    set color(color) {
        if (!Robot.isColorAvailable(color))
            throw new Error(`Color ${color} is not available`);
        this._color = color;
    }
    set name(value) {
        this._name = 'PREFIX_' + value;
    }
    get name() {
        return this._name + '_SUFFIX';
    }
}
Robot.availableColors = ['green', 'yellow'];
class FlyingRobot extends Robot {
    constructor(name, jetpackSize, color) {
        super(name, color);
        this.jetpackSize = jetpackSize;
        console.log(`acceso a prop ${this._name}`);
    }
    move(distance) {
        console.log(`${this._name} is flying`);
        super.move(distance);
        // this.jetpackSize = 1 // no se puede modificar si es readonly
    }
}
const robot = new Robot('John', 'yellow');
robot.askName();
const flyingRobot = new FlyingRobot('Kitty', 3, 'pink');
flyingRobot.move(10);
console.log(`NO acceso a prop ${flyingRobot.name} --protected`);
// console.log(`Flying robot's jetpack size is ${flyingRobot.jetpackSize}`) // propiedad privada
flyingRobot.name = 'Diana';
console.log(`My name is ${flyingRobot.name}`);
