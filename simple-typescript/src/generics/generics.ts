// Generic function
function genericFunction<T>(x: T): T {
	return x
}

const genericArrowFunction = <T>(x: T): T => x

// Generic interfaces
interface GenericInterface<T> {
	(a: T): T
	someProp: T
}

interface GenericInterface<T> {
	<U>(a: U): U
	someProp: T
}

// Generic classes
class GenericClass<P> {
	constructor(public props: P) {}

	getProps(): P {
		return this.props
	}
}

interface Expirable {
	expiryDate: Date
}

interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

const chocoCakes: ChocolateCake[] = [{ expiryDate: new Date() }]

const vanillaCakes: VanillaCake[] = [{ expiryDate: new Date() }]

interface GetExpiredItemsFunction {
	<Item extends Expirable>(items: Array<Item>): Array<Item>
}

const getExpiredItems: GetExpiredItemsFunction = (items) => {
	const currentDate = new Date().getTime()
	return items.filter((item) => item.expiryDate.getDate() < currentDate)
}

export const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes)
export const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes)

interface ShoppingCart<ItemId, Item> {
	items: Array<Item>

	addItem(this: ShoppingCart<ItemId, Item>, item: Item): void
	getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined
}

interface Item {
	id: number
	price: number
}

const cart: ShoppingCart<number, Item> = {
	items: [],

	addItem(item) {
		this.items.push(item)
	},
	getItemById(id) {
		return this.items.find((item) => item.id === id)
	},
}
