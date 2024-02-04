function findSmallestName(names) {
    let small = names[0];
    for(let name of names) {
        if(name.length < small.length) {
            small = name;
        }
    }
    return small;
}


const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallestName = findSmallestName(names);
console.log(smallestName);