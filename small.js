function getMin(array) {
    let min = array[0];
    for(let i of array) {
        if(i < min) {
            min = i;
        }
    }
    return `The min height is ${min}`;
}

const height = [65, 66, 68, 59, 78, 72, 60, 64];
const result = getMin(height);
console.log(result);