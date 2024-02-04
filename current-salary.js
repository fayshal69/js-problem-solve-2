function currentSalaryCount(persons) {
    let total = 0;
    for(let person of persons) {
        total += (person.starting + (person.experience * person.increment));
    }
    return total;
}


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const totalSalary = currentSalaryCount(employees);
console.log(totalSalary);