function getLowestNumber(array) {
    let low = array[0];
    for(let i of array) {
        if(i < low) {
            low = i;
        }
    }
    return low;
}


const height = [167, 190, 120, 165, 137];
const result = getLowestNumber(height);
console.log(result);