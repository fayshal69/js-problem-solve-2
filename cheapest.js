const mobiles = [
    {brand: 'samsang', price: 32000, camera: '52mp', color: 'Black'},
    {brand: 'Xiaomi', price: 21000, camera: '48mp', color: 'Blue'},
    {brand: 'Redmi', price: 435000, camera: '64mp', color: 'Gray'},
    {brand: 'Apple', price: 86000, camera: '32mp', color: 'Purple'},
    {brand: 'Nokia', price: 24500, camera: '48mp', color: 'Silver'}
];

function cheapestItem(items) {
    let cheapest = items[0];
    for(let item of items) {
        if(item.price < cheapest.price) {
            cheapest = item;
        }
    }
    return `The cheapest phone is: ${cheapest.brand}, price: ${cheapest.price}`;
}

const cheap = cheapestItem(mobiles);
console.log(cheap);