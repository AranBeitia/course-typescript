interface a {
	someProp: number
}

interface b {
	someProp: number
	anotherProp: number
}

let valueA: a = { someProp: 1 } // tienen que asignarse todas las props
// let valueB: b = valueA // error

// interfaces
interface Profile {
	readonly name: string // así no se podrá modificar
	age?: number // para que una prop sea opcional, basta con un interrogante
}

let profile: Profile = {
	name: 'Jon',
}

// profile.name = 'Jim' //readonly

// index signature
interface intA {
	someProp: string
	[key: string]: number | string
}

export const valA: intA = { someProp: 'mensaje' }
valA.x = 1
valA.y = 2

// call signatures
interface Sum {
	(a: number, b: number): number
	prop1: string
}

export const suma: Sum = (a, b) => a + b
suma.prop1 = 'some prop'

// extending interfaces
interface Parent {
	x: string
}
interface Parent2 {
	y: string
}
interface Parent3 {
	z: string
}

interface Child extends Parent, Parent2, Parent3 {}

export let child: Child = { x: 'some prop', y: 'some y prop', z: 'some z prop' }
