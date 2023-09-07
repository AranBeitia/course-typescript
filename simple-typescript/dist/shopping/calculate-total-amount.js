"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateTotalAmount = void 0;
function CalculateTotalAmount(order) {
    let total = order.calculateTotal();
    const discount = total * 0.1;
    total -= discount;
    const tax = total * 0.2;
    total += tax;
    return total;
}
exports.CalculateTotalAmount = CalculateTotalAmount;
