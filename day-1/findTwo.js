const findTwo = (input) => {
    let array = input.toString().split("\n").map(i => parseInt(i));
    for (i in array) {

        let remainder = 2020 - array[i];
        let found = array.indexOf(remainder);

        if (found > 0) {
            console.log(`Indexs ${i} and ${found} add up to 2020`);
            return array[i] * array[found];
        }
    }
}

module.exports = findTwo;