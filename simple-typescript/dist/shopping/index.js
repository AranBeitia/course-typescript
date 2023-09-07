"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_total_amount_1 = require("./calculate-total-amount");
const order_1 = require("./order");
const shopping_cart_1 = require("./shopping-cart");
const cart = new shopping_cart_1.ShoppingCart();
console.log(`The cart's total is ${(0, calculate_total_amount_1.CalculateTotalAmount)(cart)}`);
const order = new order_1.Order();
console.log(`The order's total is ${(0, calculate_total_amount_1.CalculateTotalAmount)(order)}`);
