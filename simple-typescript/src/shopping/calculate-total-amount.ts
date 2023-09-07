export interface InterfaceOrder {
	calculateTotal(): number
}

export function CalculateTotalAmount(order: InterfaceOrder) {
	let total = order.calculateTotal()
	const discount = total * 0.1
	total -= discount
	const tax = total * 0.2
	total += tax
	return total
}
