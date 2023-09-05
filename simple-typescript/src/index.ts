// import multiply, { multiplyByTwo } from './multiply'
import * as multiplyModule from './multiply'
import * as types from './types'

const a = 4
const b = 4

console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`)
console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`)

console.log(types.upperFirstLetter('hello'))
types.upperFirstLetter(null)
types.log('hello kitty')
console.log(types.Color.Red, types.Color.Green, types.Color.Blue)
console.log(types.Color[5])
