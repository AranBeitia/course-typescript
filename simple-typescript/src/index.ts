// import multiply, { multiplyByTwo } from './multiply'
import * as multiplyModule from './multiply'
import * as types from './types'
import * as interfaces from './interfaces'
import * as functions from './functions'

const a = 4
const b = 4

console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`)
console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`)

// types
console.log(types.upperFirstLetter('hello'))
types.upperFirstLetter(null)
types.log('hello kitty')
console.log(types.Color.Red, types.Color.Green, types.Color.Blue)
console.log(types.Color[5])

// interfaces
console.log(interfaces.valA)
console.log(interfaces.suma(8, 9))
console.log(interfaces.child)

// functions
console.log(functions.sum(9))
console.log(functions.sum2(9, 1))
console.log(functions.sumEverything('4', false, 9, 1, 8, 10))
