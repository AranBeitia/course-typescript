class Robot {
	// protected name: string

	// constructor(name: string) {
	// 	this.name = name
	// }
	_color: string

	static availableColors = ['green', 'yellow']
	static isColorAvailable(color: string) {
		return Robot.availableColors.includes(color)
	}

	constructor(protected _name: string) {}

	askName() {
		console.log(`My name is ${this._name}`)
	}
	move(distance: number) {
		console.log(`${this._name} moved ${distance} meters`)
		console.log(`acceso a prop ${this._name}`)
	}

	set color(color: string) {
		if (!Robot.isColorAvailable(color))
			throw new Error(`Color ${color} is not available`)
		this._color = color
	}

	set name(value: string) {
		this._name = 'PREFIX_' + value
	}

	get name() {
		return this._name + '_SUFFIX'
	}
}

class FlyingRobot extends Robot {
	private readonly jetpackSize: number

	constructor(name: string, jetpackSize: number) {
		super(name)
		this.jetpackSize = jetpackSize
		console.log(`acceso a prop ${this._name}`)
	}

	move(distance: number) {
		console.log(`${this._name} is flying`)
		super.move(distance)
		// this.jetpackSize = 1 // no se puede modificar si es readonly
	}
}

const robot = new Robot('John')
robot.askName()

const flyingRobot = new FlyingRobot('Kitty', 3)
flyingRobot.move(10)
console.log(`NO acceso a prop ${flyingRobot._name} --protected`)
// console.log(`Flying robot's jetpack size is ${flyingRobot.jetpackSize}`) // propiedad privada

flyingRobot.name = 'Diana'
console.log(`My name is ${flyingRobot.name}`)
