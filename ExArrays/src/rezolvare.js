function participatingCountries() {
    const arr = getOlympicData();
    return arr.map(item => item.Nation);
}

console.log(participatingCountries());