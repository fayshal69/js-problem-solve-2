function multiLayerDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const third100Price = 80;

    if(quantity <= 100) {
        const totalPrice = quantity * first100Price;
        return totalPrice;
    }
    else if(quantity <= 200) {
        const totalPrice = (100 * first100Price) + (quantity - 100) * second100Price;
        return totalPrice;
    }
    else {
        const totalPrice = (100 * first100Price) + (100 * second100Price) + (quantity - 200) * third100Price;
        return totalPrice;
    }
}

const price = multiLayerDiscount(300);
console.log(price);