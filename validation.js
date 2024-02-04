function multiply(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        const multi = num1 * num2;
        return multi;
    }
    else {
        return 'Input invalid number';
    }
}

const result = multiply(-5, -2);
console.log(result);