import { InterfaceOrder } from './calculate-total-amount'

export class Order implements InterfaceOrder {
	calculateTotal() {
		return 100
	}
}
