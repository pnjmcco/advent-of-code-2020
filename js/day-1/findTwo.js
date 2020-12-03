const findTwo = (input) => {
  const array = input.toString().split('\n').map((i) => parseInt(i, 10));
  for (i in array) {
    const remainder = 2020 - array[i];
    const found = array.indexOf(remainder);

    if (found > 0) {
      return array[i] * array[found];
    }
  }
};

module.exports = findTwo;
