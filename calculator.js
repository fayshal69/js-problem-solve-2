function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if(operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(operation === 'sub') {
        const result = sub(a, b);
        return result;
    }
    else if (operation === 'multi') {
        const result = multi(a, b);
        return result;
    }
    else if(operation === 'div') {
        const result = div(a, b);
        return result;
    }
    else {
        return 'Operation is now allow.';
    }
}

const result = calculator(5, 7, 'add');
console.log(result);