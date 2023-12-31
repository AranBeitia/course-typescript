// function optional and default parameters

// export function sum(a: number, b?: number): number {
// 	return a + (b || 0)
// }
export function sum(a: number, b: number = 0): number {
	return a + b
}

type MyFunc = (a: number, b: number) => number
export const sum2: MyFunc = (a, b) => a + b

// unknown number of arguments

export function sumEverything(
	arg1: string,
	arg2: boolean,
	...numbers: number[]
): number {
	return numbers.reduce((result, num) => result + num, 0)
}

// overloads

function calcArea(width: number, height: number): number
function calcArea(length: number): number
function calcArea(...args: number[]): number {
	if (args.length === 2) {
		return args[0] * args[1]
	}
	return Math.pow(args[0], 2)
}
