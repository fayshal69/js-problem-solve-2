function woodtCalculator(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairWood = chair * perChairWood;
    const allTableWood = table * perTableWood;
    const allBedWood = bed * perBedWood;

    const totalWood = allChairWood + allTableWood + allBedWood;

    return totalWood;
}

const wood = woodtCalculator(1, 1, 1);
console.log('Wood needed', wood);