function totalPrice(items) {
    let sum = 0;
    for(let item of items) {
        sum += (item.price * item.quantity);
    }
    return `Total price is: ${sum} tk.`;
}

const products = [
    {name: 'Shampoo', price: 50, quantity: 2},
    {name: 'Aroma', price: 50, quantity: 2},
    {name: 'Shirt', price: 50, quantity: 2},
    {name: 'Pant', price: 50, quantity: 2}
];

const total = totalPrice(products);
console.log(total);