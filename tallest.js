function getMax(array) {
    let max = array[0];
    for(let i of array) {
        if(i > max) {
            max = i;
        }
    }
    return `The max height is ${max}`;
}

const height = [65, 66, 68, 59, 78, 72, 60, 64];
const result = getMax(height);
console.log(result);