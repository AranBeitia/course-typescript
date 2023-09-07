class Robotin {
	#name: string

	private somePrivateField = 'It is private!!!'

	constructor(name: string) {
		this.#name = name
	}

	getName() {
		return this.#name
	}
}

class AdvancedRobot extends Robotin {
	#name: string

	// private somePrivateField = 'OVERRIDE PRIVATE FIELD'

	constructor(name: string) {
		super(name)
		this.#name = `Advanced ${name}`
	}

	getAdvancedRobotName() {
		return this.#name
	}
}

const robotin = new AdvancedRobot('Jack')
console.log('parent name', robotin.getName())
console.log('subclass name', robotin.getAdvancedRobotName())
// console.log(robotin.somePrivateField)
