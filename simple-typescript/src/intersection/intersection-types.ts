interface interfA {
	a: number
}

interface interfB {
	b: number
}

interface interfC {
	c: number
}

export function X(obj: interfA & interfB & interfC) {
	return obj.a + obj.b + obj.c
}

function combine<ObjA extends object, ObjB extends object>(
	objA: ObjA,
	objB: ObjB
): ObjA & ObjB {
	return { ...objA, ...objB }
}

const objA = { a: 1 }
const objB = { b: 2 }
const resultObj = combine(objA, objB)
