const seatId = (input) => {
  return Math.max(...input.split('\n').map((line) => {
    const binary = line.replace(/F|L/g, 0).replace(/B|R/g, 1);
    return parseInt(binary, 2);
  }));
};

module.exports = seatId;
