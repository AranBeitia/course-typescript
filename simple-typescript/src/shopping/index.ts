import { CalculateTotalAmount } from './calculate-total-amount'
import { Order } from './order'
import { ShoppingCart } from './shopping-cart'

const cart = new ShoppingCart()
console.log(`The cart's total is ${CalculateTotalAmount(cart)}`)

const order = new Order()
console.log(`The order's total is ${CalculateTotalAmount(order)}`)
