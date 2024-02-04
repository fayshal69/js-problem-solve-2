function calculateElectronicsBudget(laptop, tablets, mobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalPrice = (laptop * laptopPrice) + (tablets * tabletPrice) + (mobile * mobilePrice);

    return totalPrice;
}


const totalPrice = calculateElectronicsBudget(1, 1, 1);
console.log(totalPrice);