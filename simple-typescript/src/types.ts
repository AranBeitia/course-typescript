// Boolean
let b: boolean = false

// Number(decimal, binary, octal, hexadecimal)
let numb: number = 1 + 0b1 + 0o1 + 0x1

// String
const greeting: string = 'Hello'
const info: string = 'World'
const message = `${greeting} ${info}`

// Null and undefined
let n: null = null
let u: undefined = undefined

// let someNumber: number = null (strict = true)

export function upperFirstLetter(value: string | null) {
	if (!value) return
	return value[0].toUpperCase() + value.substring(1)
}

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined
const myObject: object = {}
const myObject2: object = []
const myObject3: object = new Map()

// Void (para funciones que no retornan nada)
export function log(message: string): void {
	console.log(message)
}

// Array
let array1: string[] = ['x', 'y']
let array2: Array<string> = array1

// Tuple
let tuple: [string, number] = ['hello', 1]

// Enum
export enum Color {
	Red = 2,
	Green = 5,
	Blue,
}

let myFavouriteColor: Color = Color.Blue

// Any
let anyValue: any
anyValue = 'a string'
anyValue = 12
anyValue = true

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
