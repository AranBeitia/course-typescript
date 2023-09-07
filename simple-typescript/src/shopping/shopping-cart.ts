import { InterfaceOrder } from './calculate-total-amount'

export class ShoppingCart implements InterfaceOrder {
	calculateTotal() {
		return 100
	}
}
