"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expiredVanillaCakes = exports.expiredChocoCakes = void 0;
// Generic function
function genericFunction(x) {
    return x;
}
const genericArrowFunction = (x) => x;
// Generic classes
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocoCakes = [{ expiryDate: new Date() }];
const vanillaCakes = [{ expiryDate: new Date() }];
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};
exports.expiredChocoCakes = getExpiredItems(chocoCakes);
exports.expiredVanillaCakes = getExpiredItems(vanillaCakes);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    },
};
